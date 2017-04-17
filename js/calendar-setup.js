var new_event = function(date) {
	current_event = null;
	$('#event-info-form').get(0).reset();
	$("#change-event-modal-title").text("New Event");
	$("#create-event-btn").text("Create");
	$('#new-event-modal').modal('toggle');
	$("#new_event_date").val(date.format());
	$("#new_event_start_time").val("13:00");
	$("#new_event_end_time").val("14:00");
}

var open_event = function(event) {
	current_event = event;
	$("#event-title").text(event.title);
	$("#event_type").text(event.eventType);
	$("#event_date").text(moment(event.start).format("MMM D, YYYY"));
	$("#event_start_time").text(moment(event.start).format("h:mm A"));
	$("#event_end_time").text(moment(event.end).format("h:mm A"));
	$('#event-modal').modal('toggle');
}

// Pre-Populated Events
var lecture1 = {
	title: "Lecture 1",
	start: moment("04/12/2017 13:00").format(),
	end: moment("04/12/2017 14:00").format(),
	className: "lecture-event",
	eventType: "Lecture",
}
var lecture2 = {
	title: "Lecture 2",
	start: moment("04/14/2017 13:00").format(),
	end: moment("04/14/2017 14:00").format(),
	className: "lecture-event",
	eventType: "Lecture",
}

var quiz1 = {
	title: "Quiz 1",
	start: moment("04/28/2017 13:00").format(),
	end: moment("04/28/2017 14:00").format(),
	className: "quiz-event",
	eventType: "Quiz"
}

// necessary to cleanly update event
var current_event = null;

var sampleEvents = [
	lecture1,
	lecture2,
	quiz1
];