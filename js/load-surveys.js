var data = {
	id: "initial-staff-meeting",
	title: "Initial Staff Meeting",
	tas_asked: true,
	las_asked: true,
	students_asked: false,
	start_date: moment("2017-02-16"),
	end_date: moment("2017-02-20"),
	start_time: moment("2017-02-16 05:00 PM"), // use first date to make it a valid moment
	end_time: moment("2017-02-16 09:00 PM"),
	// results: {
	// 	2017-02-16: {
	// 		available: ["Caitlin", "Rachel", "Isaac"],
	// 		unavailable: ["Becky"]
	// 	}
	// }

}

console.log(data);

// Overall setup
var overallDivs = `
<div class="row" id="`+data.id+`">
<br />
<div class="col-xs-3" id="`+data.id+`-people-types"></div>
<div class="col-xs-9" id="`+data.id+`-avail-results"></div>
</div>`;

$("#survey-results").append($.parseHTML(overallDivs))

var tas = $.parseHTML(`<label class="form-check-label">
	<input id="`+data.id+`-tas" class="form-check-input" type="checkbox" value="">
	TAs
	</label><br/>`);
$("#"+data.id+"-people-types").append(tas);
if (data.tas_asked) {
	$("#"+data.id+"-tas").prop('checked', true);
} else {
	$("#"+data.id+"-tas").prop('disabled', true);
}

var las = $.parseHTML(`<label class="form-check-label">
	<input id="`+data.id+`-las" class="form-check-input" type="checkbox" value="">
	LAs
	</label><br/>`);
$("#"+data.id+"-people-types").append(las);
if (data.las_asked) {
	$("#"+data.id+"-las").prop('checked', true);
} else {
	$("#"+data.id+"-las").prop('disabled', true);
}

var students = $.parseHTML(`<label class="form-check-label">
	<input id="`+data.id+`-students" class="form-check-input" type="checkbox" value="">
	Students
	</label><br/>`);
$("#"+data.id+"-people-types").append(students);
if (data.students_asked) {
	$("#"+data.id+"-students").prop('checked', true);
} else {
	$("#"+data.id+"-students").prop('disabled', true);
}


var avail_table = $.parseHTML(`<table id="`+data.id+`-avail-table" class="availability-table"></table>`);
$("#"+data.id+"-avail-results").append(avail_table);
var avail_table = $("#"+data.id+"-avail-table");

var table_height = data.end_time.diff(data.start_time, 'hours')+1; // plus 1 for header
var table_width = data.end_date.diff(data.start_date, 'days')+2; // plus 2 b/c 1 for header, 1 to get last day
console.log(table_height);
console.log(table_width);

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
  // Make the table
  for (var row = 1; row < table_height; row++) {
  	var table_row = $("<tr>");
  	for (var col = 0; col < table_width; col++) {
  		var cell;
  		if (col == 0 ) {
  			cell = $("<th>");
  			var time = moment(data.start_time).add(row-1, 'hour').format("LT"); // clone to not mutate date
 			cell.text(time); // row is indexed from 1
  		} else {
	  		cell = $("<td>");
	  		var col_letter = String.fromCharCode(97 + col); // Translate index to letter
	  		cell.text(col_letter + (row+1)); // row is indexed from 1
	  	}
	  	cell.css('width', "calc(50%px/"+table_width+")"); // Make them all the same width
  		table_row.append(cell);
  	}
  	avail_table.append(table_row);
  }

  avail_table.find('tr').eq(3).find('td').eq(2).css('background-color', "red");
