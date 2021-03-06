var surveys = JSON.parse(window.localStorage.getItem("availabilities"));

// stringify / JSON.parse don't know about moment objects
// creating a moment from a moment just clones it so it's okay if somehow it's already been momentified
surveys.forEach(function(survey) {
	["end_date", "end_time", "start_time", "start_date"].forEach(function(key) {
		survey[key] = moment(survey[key]);
	});
});

var reverse_end_date_order = function(a, b) {
	if (b.end_date.isBefore(a.end_date)) {
		return -1;
	}
	if (a.end_date.isBefore(b.end_date)) {
		return 1;
	}
  	// a must be equal to b
  	return 0;
  }

  surveys = surveys.sort(reverse_end_date_order);


  var get_label = function(data) {
  	var start = moment(data.start_date).format("M/D");
  	var end = moment(data.end_date).format("M/D");
  	var label = data.title + " (" + start + " - " + end + ")";
  	return label;
  }

  var get_relevant_groups = function(data) {
  	var groups = []
  	if ($("#"+data.id+"-students").prop('checked')) {
  		groups.push(data.student_results);
  	}
  	if ($("#"+data.id+"-tas").prop('checked')) {
  		groups.push(data.ta_results);
  	}
  	if ($("#"+data.id+"-las").prop('checked')) {
  		groups.push(data.la_results);
  	}
  	return groups;
  }

  var get_cutoffs = function(groups) {
  	if (groups.length == 0) return {best: 1, mid:1};
  	var avail_numbers = [];
  	Object.keys(groups[0]).forEach(function(time) {
  		groups[0][time].forEach(function(avail, day_index) {
  			var total_avail = 0;
  			groups.forEach(function(person_type) {
  				total_avail += person_type[time][day_index]["available"].length;
  			})
  			avail_numbers.push(total_avail);
  		});
  	});

  	avail_numbers = avail_numbers.sort(function(a,b){return a - b});
  	return {best: avail_numbers[avail_numbers.length-1], mid: avail_numbers[avail_numbers.length/2]};
  }

  var color_table = function(data) {
	var table_height = 2*data.end_time.diff(data.start_time, 'hours')+1; // plus 1 for header
	var table_width = data.end_date.diff(data.start_date, 'days')+2; // plus 2 b/c 1 for header, 1 to get last day
	var relevant_groups = get_relevant_groups(data);
	var color_cutoffs = get_cutoffs(relevant_groups);

	for (var row = 1; row < table_height; row++) {
		var avail_table = $("#"+data.id+"-avail-table");
		for (var col = 0; col < table_width-1; col++) {
			var cell = avail_table.find('tr').eq(row).find('td').eq(col);
			var time = moment(data.start_time).add((row-1)*30, 'minute').format("LT"); // clone to not mutate date
			var avail_num = 0;
			var avail_people = [];
			var unavail_people = [];
			relevant_groups.forEach(function(group) {
				avail_num += group[time][col]["available"].length;
				avail_people = avail_people.concat(group[time][col]["available"]);
				// console.log(group[time][col]["available"]);
				unavail_people = unavail_people.concat(group[time][col]["unavailable"]);
			});
			if (avail_num == color_cutoffs["best"]) {
				// green
				cell.css('background-color', '#0ba848');
				cell.attr("data-alert-type", "alert-success");	
			} else if (avail_num >= color_cutoffs["mid"]) {
				// yellow
				cell.css('background-color', '#f9f577');
				cell.attr("data-alert-type", "alert-warning");	
			} else {
				// red
				cell.css('background-color', '#f77171');
				cell.attr("data-alert-type", "alert-danger");	
			}
	  		cell.text(avail_num); // row is indexed from 1
	  		var date = moment(data.start_date).add(col, 'day').format("ddd M/D");
	  		var tell_user = date + " "+ time  +":<br><b>Available:</b><br>";
	  		if (avail_people.length > 0) {
	  			tell_user = avail_people.reduce(function(str, name) {
	  				return str + name + "<br>";
	  			}, tell_user);
	  		} else {
	  			tell_user = tell_user + "None"
	  		}
	  		tell_user = tell_user + "<br><b>Unavailable:</b><br>";
	  		if (unavail_people.length > 0) {
	  			tell_user = unavail_people.reduce(function(str, name) {
	  				return str + name + "<br>";
	  			}, tell_user);
	  		} else {
	  			tell_user = tell_user + "None";
	  		}
	  		cell.attr("data-available_people", tell_user);
	  	}
	  }
	}

	var no_results = function(data) {
		var outline = `<a data-toggle="collapse" data-target="#`+data.id+`" class="list-group-item listed-item" style="display:inline-block; width: 100%">`+get_label(data)+`<span class="pull-right glyphicon glyphicon-chevron-down"></span></a>
		<div class="row collapse col-xs-12" id="`+data.id+`" style="margin: 10px;">No Results... Yet!</div>`;
		$("#no-results").append($.parseHTML(outline))
	}

	var upcoming_heading = false;
	var current_heading = false;
	var past_heading = false;
	surveys.forEach(function(data) {
		console.log(data);

		if ($.isEmptyObject(data.ta_results) && $.isEmptyObject(data.la_results) && $.isEmptyObject(data.student_results)) {
			no_results(data);
			return;
		}

		if (!upcoming_heading && moment().isBefore(data.start_date)) {
			var heading = $("<h3>", {
				text: "Upcoming",
				class: "content-header"
			});
			$("#survey-results").append($("<br>")).append(heading);
			upcoming_heading = true;
		}
		if (!current_heading && moment().isBefore(data.end_date) && data.start_date.isBefore(moment())) {
			var heading = $("<h3>", {
				text: "Current",
				class: "content-header"
			});
			$("#survey-results").append($("<div></div><br>")).append(heading);
			current_heading = true;
		}
		if (!past_heading && data.end_date.isBefore(moment())) {
			var heading = $("<h3>", {
				text: "Past",
				class: "content-header",
				id: "past-header"
			});
			$("#survey-results").append($("<div></div><br>")).append(heading);
			past_heading = true;
		}

		// Overall setup
		var overallDivs = `
		<a data-toggle="collapse" data-target="#`+data.id+`" class="list-group-item listed-item" style="display:inline-block; width: 100%">`+get_label(data)+`<span class="pull-right glyphicon glyphicon-chevron-down"></span></a>
		<div class="row collapse" id="`+data.id+`">
		<br />
		<div class="col-xs-2" id="`+data.id+`-people-types"></div>
		<div class="col-xs-7">
		<div id="`+data.id+`-avail-results"></div>
		<br />
		<br />
		<p><button type="button" class="btn btn-default new-event-btn" style="float: right; margin: 10px;">New Event</button></p>
		</div>
		<div id="`+data.id+`-avail-people" class="col-xs-3">
		<div class="alert alert-success alert-dismissible" id="`+data.id+`-avail-people-alert">
		<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
		Click a box to see who's available!
		</div>
		</div>
		<br/>
		
		</div>`;

		$("#survey-results").append($.parseHTML(overallDivs))

		var tas = $.parseHTML(`<label class="form-check-label">
			<input id="`+data.id+`-tas" class="form-check-input `+data.id+`-people-checkbox" type="checkbox" value="">
			TAs
			</label><br/>`);
		$("#"+data.id+"-people-types").append(tas);
		if (data.tas_asked) {
			$("#"+data.id+"-tas").prop('checked', true);
		} else {
			$("#"+data.id+"-tas").prop('disabled', true);
		}

		var las = $.parseHTML(`<label class="form-check-label">
			<input id="`+data.id+`-las" class="form-check-input `+data.id+`-people-checkbox" type="checkbox" value="">
			LAs
			</label><br/>`);
		$("#"+data.id+"-people-types").append(las);
		if (data.las_asked) {
			$("#"+data.id+"-las").prop('checked', true);
		} else {
			$("#"+data.id+"-las").prop('disabled', true);
		}

		var students = $.parseHTML(`<label class="form-check-label">
			<input id="`+data.id+`-students" class="form-check-input `+data.id+`-people-checkbox" type="checkbox" value="">
			Students
			</label><br/>`);
		$("#"+data.id+"-people-types").append(students);
		if (data.students_asked) {
			$("#"+data.id+"-students").prop('checked', true);
		} else {
			$("#"+data.id+"-students").prop('disabled', true);
		}

// create availabilities table
var avail_table = $.parseHTML(`<table id="`+data.id+`-avail-table" class="availability-table" style="float:right;"></table>`);
$("#"+data.id+"-avail-results").append(avail_table);
var avail_table = $("#"+data.id+"-avail-table");

var table_height = 2*data.end_time.diff(data.start_time, 'hours')+1; // plus 1 for header
var table_width = data.end_date.diff(data.start_date, 'days')+2; // plus 2 b/c 1 for header, 1 to get last day

// adapted from my code for candy crush
// make the table headers
var table_row = $("<tr>");
table_row.append($("<th>"));
for (var col = 0; col < table_width-1; col++) {
	var cell = $("<th>");
  	cell.css('width', "calc(100%px/"+table_width+")"); // Make them all the same width
  	var date = moment(data.start_date).add(col, 'day').format("ddd M/D"); // clone to not mutate date
 	cell.text(date); // row is indexed from 1
 	table_row.append(cell);
 }
 avail_table.append(table_row);

 var relevant_groups = get_relevant_groups(data);
 var color_cutoffs = get_cutoffs(relevant_groups);
// Make the table
for (var row = 1; row < table_height; row++) {
	var table_row = $("<tr>");
	for (var col = 0; col < table_width; col++) {
		var cell;
		var time = moment(data.start_time).add((row-1)*30, 'minute').format("LT"); // clone to not mutate date
		if (col == 0 ) {
			cell = $("<th>");
 			cell.text(time); // row is indexed from 1
 		} else {
 			cell = $("<td>");
 			cell.attr("data-survey-id", data.id);
 			cell.addClass("avail_cell");
 		}
	  	cell.css('width', "calc(100%px/"+table_width+")"); // Make them all the same width
	  	table_row.append(cell);
	  }
	  avail_table.append(table_row);
	}



	color_table(data);

	$(document).on('click', '.'+data.id+'-people-checkbox', function() {
		color_table(data);
	});
});

$(document).on('click', '.avail_cell', function() {
	var survey_id = $(this).attr("data-survey-id");
	var spot = $("#"+survey_id+"-avail-people");
	var alert_name = survey_id+"-avail-people-alert";
	if ($("#"+alert_name).length) {
		$("#"+alert_name).alert("close");
	}
	var box = `<div class="alert `+$(this).attr("data-alert-type")+` alert-dismissible" id="`+alert_name+`">
		<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
		`+$(this).attr("data-available_people")+`
		</div>`;
	spot.append($.parseHTML(box));
	// alert($(this).attr("data-available_people"));
});
