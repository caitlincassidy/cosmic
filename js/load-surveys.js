var data = {
	id: "initial-staff-meeting",
	title: "Initial Staff Meeting",
	tas_asked: true,
	las_asked: true,
	students_asked: false,
	start_date: moment("2017-02-13"),
	end_date: moment("2017-02-17"),
	start_time: moment("2017-02-13 05:00 PM"), // use first date to make it a valid moment
	end_time: moment("2017-02-13 09:00 PM"),
	ta_results: { // indexed by time as shown on cal then list in order of days
		"5:00 PM": [
		{
			available: ["Caitlin", "Rachel"],
			unavailable: ["Becky", "Isaac"]
		},
		{
			available: ["Caitlin", "Isaac"],
			unavailable: ["Becky", "Rachel"]
		},
		{
			available: ["Caitlin", "Isaac",],
			unavailable: ["Rachel", "Becky"]
		},
		{
			available: ["Caitlin", "Rachel", "Isaac", "Becky"],
			unavailable: []
		},
		{
			available: ["Rachel"],
			unavailable: ["Becky", "Isaac", "Caitlin"]
		}],
		"5:30 PM": [
		{
			available: ["Caitlin", "Rachel", "Isaac"],
			unavailable: ["Becky"]
		},
		{
			available: ["Caitlin", ],
			unavailable: ["Becky", "Rachel", "Isaac"]
		},
		{
			available: ["Caitlin", "Isaac", "Becky"],
			unavailable: ["Rachel",]
		},
		{
			available: ["Caitlin", "Isaac"],
			unavailable: ["Becky", "Rachel"]
		},
		{
			available: [],
			unavailable: ["Becky", "Isaac", "Caitlin", "Rachel"]
		}], 
		"6:00 PM": [
		{
			available: ["Caitlin", "Isaac"],
			unavailable: ["Becky", "Rachel"]
		},
		{
			available: ["Caitlin", "Rachel", "Isaac"],
			unavailable: ["Becky", ]
		},
		{
			available: ["Caitlin", "Rachel", "Isaac", "Becky"],
			unavailable: []
		},
		{
			available: ["Caitlin", "Rachel", "Isaac", "Becky"],
			unavailable: []
		},
		{
			available: ["Rachel"],
			unavailable: ["Becky", "Isaac", "Caitlin"]
		}],
		"6:30 PM": [
		{
			available: ["Caitlin", "Rachel", "Isaac"],
			unavailable: ["Becky"]
		},
		{
			available: ["Caitlin", "Isaac"],
			unavailable: ["Becky", "Rachel"]
		},
		{
			available: ["Caitlin", "Rachel", "Isaac", "Becky"],
			unavailable: []
		},
		{
			available: ["Caitlin", "Rachel", "Isaac"],
			unavailable: ["Becky"]
		},
		{
			available: ["Rachel"],
			unavailable: ["Becky", "Isaac", "Caitlin"]
		}],
		"7:00 PM": [
		{
			available: ["Caitlin", "Rachel", "Isaac"],
			unavailable: ["Becky"]
		},
		{
			available: ["Caitlin", "Isaac"],
			unavailable: ["Becky", "Rachel"]
		},
		{
			available: ["Caitlin", "Rachel", "Isaac", "Becky"],
			unavailable: []
		},
		{
			available: ["Caitlin", "Rachel", "Isaac", "Becky"],
			unavailable: []
		},
		{
			available: ["Rachel", "Isaac"],
			unavailable: ["Becky", "Caitlin"]
		}],
		"7:30 PM": [
		{
			available: ["Caitlin", "Rachel", "Isaac"],
			unavailable: ["Becky"]
		},
		{
			available: ["Caitlin", "Isaac"],
			unavailable: ["Becky", "Rachel"]
		},
		{
			available: ["Caitlin", "Rachel", "Becky"],
			unavailable: ["Isaac",]
		},
		{
			available: ["Caitlin", "Rachel", "Isaac"],
			unavailable: ["Becky"]
		},
		{
			available: ["Rachel"],
			unavailable: ["Becky", "Isaac", "Caitlin"]
		}],
		"8:00 PM": [
		{
			available: ["Caitlin", "Rachel", "Isaac"],
			unavailable: ["Becky"]
		},
		{
			available: ["Caitlin", "Isaac"],
			unavailable: ["Becky", "Rachel"]
		},
		{
			available: ["Caitlin", "Rachel", "Isaac", "Becky"],
			unavailable: []
		},
		{
			available: ["Caitlin", "Rachel", "Isaac"],
			unavailable: ["Becky"]
		},
		{
			available: ["Rachel", "Caitlin"],
			unavailable: ["Becky", "Isaac", ]
		}],
		"8:30 PM": [
		{
			available: ["Becky", "Caitlin", "Rachel", "Isaac"],
			unavailable: []
		},
		{
			available: ["Caitlin", "Isaac"],
			unavailable: ["Becky", "Rachel"]
		},
		{
			available: ["Caitlin", "Rachel", "Isaac"],
			unavailable: ["Becky"]
		},
		{
			available: ["Caitlin", "Rachel", "Isaac"],
			unavailable: ["Becky"]
		},
		{
			available: ["Rachel"],
			unavailable: ["Becky", "Isaac", "Caitlin"]
		}],
	},
	la_results: { // indexed by time as shown on cal then list in order of days
		"5:00 PM": [
		{
			available: ["Ricky", "Laura"],
			unavailable: ["Ben", "Louis"]
		},
		{
			available: ["Ricky", "Louis"],
			unavailable: ["Ben", "Laura"]
		},
		{
			available: ["Ricky", "Louis", "Ben"],
			unavailable: ["Laura"]
		},
		{
			available: ["Ricky", "Laura", "Louis"],
			unavailable: ["Ben"]
		},
		{
			available: [],
			unavailable: ["Laura", "Ben", "Louis", "Ricky"]
		}],
		"5:30 PM": [
		{
			available: ["Ricky", "Laura", "Louis"],
			unavailable: ["Ben"]
		},
		{
			available: ["Ricky", "Laura", "Louis"],
			unavailable: ["Ben"]
		},
		{
			available: ["Ricky", "Laura", "Louis", "Ben"],
			unavailable: []
		},
		{
			available: ["Ricky", "Laura"],
			unavailable: ["Ben", "Louis"]
		},
		{
			available: ["Laura"],
			unavailable: ["Ben", "Louis", "Ricky"]
		}], 
		"6:00 PM": [
		{
			available: ["Ricky", "Louis"],
			unavailable: ["Ben", "Laura"]
		},
		{
			available: ["Ricky", "Ben", "Laura", "Louis"],
			unavailable: []
		},
		{
			available: [],
			unavailable: ["Ricky", "Louis", "Ben", "Laura"]
		},
		{
			available: ["Ricky", "Laura", "Louis"],
			unavailable: ["Ben"]
		},
		{
			available: ["Laura", "Ricky"],
			unavailable: ["Ben", "Louis"]
		}],
		"6:30 PM": [
		{
			available: ["Ricky", "Laura", "Louis"],
			unavailable: ["Ben"]
		},
		{
			available: ["Ricky", "Louis"],
			unavailable: ["Ben", "Laura"]
		},
		{
			available: ["Ricky", "Laura", "Louis"],
			unavailable: ["Ben"]
		},
		{
			available: ["Ricky", "Laura"],
			unavailable: ["Ben", "Louis"]
		},
		{
			available: ["Laura"],
			unavailable: ["Ben", "Louis", "Ricky"]
		}],
		"7:00 PM": [
		{
			available: ["Ricky", "Laura", "Louis"],
			unavailable: ["Ben"]
		},
		{
			available: ["Ricky", "Laura", "Louis"],
			unavailable: ["Ben"]
		},
		{
			available: ["Ricky", "Laura", "Louis", "Ben"],
			unavailable: []
		},
		{
			available: ["Ricky", "Louis"],
			unavailable: ["Ben", "Laura"]
		},
		{
			available: ["Laura"],
			unavailable: ["Ben", "Louis", "Ricky"]
		}],
		"7:30 PM": [
		{
			available: ["Ricky", "Laura", "Louis"],
			unavailable: ["Ben"]
		},
		{
			available: ["Ricky", "Louis"],
			unavailable: ["Ben", "Laura"]
		},
		{
			available: ["Ricky", "Laura", "Louis", "Ben"],
			unavailable: []
		},
		{
			available: ["Ricky", "Laura", "Louis"],
			unavailable: ["Ben"]
		},
		{
			available: ["Laura"],
			unavailable: ["Ben", "Louis", "Ricky"]
		}],
		"8:00 PM": [
		{
			available: ["Ricky", "Laura"],
			unavailable: ["Ben", "Louis"]
		},
		{
			available: ["Ricky", "Louis"],
			unavailable: ["Ben", "Laura"]
		},
		{
			available: ["Ricky", "Laura", "Louis", "Ben"],
			unavailable: []
		},
		{
			available: ["Ricky", "Laura", "Louis"],
			unavailable: ["Ben"]
		},
		{
			available: [],
			unavailable: ["Laura", "Ben", "Louis", "Ricky"]
		}],
		"8:30 PM": [
		{
			available: ["Ricky", "Laura", "Louis", "Ben"],
			unavailable: []
		},
		{
			available: ["Ricky", "Louis"],
			unavailable: ["Ben", "Laura"]
		},
		{
			available: ["Ricky", "Ben"],
			unavailable: ["Laura", "Louis"]
		},
		{
			available: ["Ricky", "Laura"],
			unavailable: ["Ben", "Louis"]
		},
		{
			available: ["Laura", "Ben", "Louis", "Ricky"],
			unavailable: []
		}],
	},
	student_results: {},
}

var get_label = function(data) {
	var start = moment(data.start_date).format("M/D");
	var end = moment(data.end_date).format("M/D");
	var label = data.title + " (" + start + " - " + end + ")";
	return label;
}

// Overall setup
var overallDivs = `
<a data-toggle="collapse" data-target="#`+data.id+`" class="list-group-item listed-item" style="display:inline-block; width: 75%">`+get_label(data)+`<span class="pull-right glyphicon glyphicon-chevron-down"></span></a>
<div class="row collapse" id="`+data.id+`">
<br />
<div class="col-xs-2" id="`+data.id+`-people-types"></div>
<div class="col-xs-10" id="`+data.id+`-avail-results"></div>
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
var avail_table = $.parseHTML(`<table id="`+data.id+`-avail-table" class="availability-table"></table>`);
$("#"+data.id+"-avail-results").append(avail_table);
var avail_table = $("#"+data.id+"-avail-table");

var table_height = 2*data.end_time.diff(data.start_time, 'hours')+1; // plus 1 for header
var table_width = data.end_date.diff(data.start_date, 'days')+2; // plus 2 b/c 1 for header, 1 to get last day

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
	
	avail_numbers = avail_numbers.sort();
	console.log(avail_numbers);
	return {best: avail_numbers[avail_numbers.length-1], mid: avail_numbers[avail_numbers.length/2]};
}

var get_relevant_groups = function() {
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

// adapted from my code for candy crush
// make the table headers
var table_row = $("<tr>");
table_row.append($("<th>"));
for (var col = 0; col < table_width-1; col++) {
	var cell = $("<th>");
  	cell.css('width', "calc(50%px/"+table_width+")"); // Make them all the same width
  	var date = moment(data.start_date).add(col, 'day').format("ddd M/D"); // clone to not mutate date
 	cell.text(date); // row is indexed from 1
 	table_row.append(cell);
 }
 avail_table.append(table_row);

 var relevant_groups = get_relevant_groups();
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
	  	}
	  	cell.css('width', "calc(50%px/"+table_width+")"); // Make them all the same width
	  	table_row.append(cell);
	  }
	  avail_table.append(table_row);
	}

	var color_table = function() {
		var relevant_groups = get_relevant_groups();
		var color_cutoffs = get_cutoffs(relevant_groups);

		for (var row = 1; row < table_height; row++) {
			var avail_table = $("#"+data.id+"-avail-table");
			for (var col = 0; col < table_width-1; col++) {
				var cell = avail_table.find('tr').eq(row).find('td').eq(col);
				var time = moment(data.start_time).add((row-1)*30, 'minute').format("LT"); // clone to not mutate date
				var avail_num = 0;
				relevant_groups.forEach(function(group) {
					avail_num += group[time][col]["available"].length;
				});
				if (avail_num == color_cutoffs["best"]) {
					cell.css('background-color', 'green');
					cell.css('opacity', '1.0');
				} else if (avail_num >= color_cutoffs["mid"]) {
					cell.css('background-color', 'yellow');
					cell.css('opacity', '0.5');
				} else {
					cell.css('background-color', 'red');
					cell.css('opacity', '0.5');
				}
	  			cell.text(avail_num); // row is indexed from 1
	  			}
	  		}
	  	}

	  	color_table();

	  	$(document).on('click', '.'+data.id+'-people-checkbox', function() {
	  		color_table();
	  	});



// avail_table.find('tr').eq(3).find('td').eq(2).css('background-color', "red");
