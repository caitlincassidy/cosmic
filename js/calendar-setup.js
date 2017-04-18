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

var calendarView = function() {
	$('#calendar').fullCalendar('destroy');
	$('#calendar').fullCalendar({
		// put your options and callbacks here
		header: {
	    left: 'prev, next, today, title',
	    right: 'month, agendaWeek, agendaFiveDay, agendaDay'
	  },
	  views: {
	    agendaFiveDay: {
	        type: 'agenda',
	        duration: { days: 5 },
	        buttonText: '5 Day'
	    }
	  },
	  defaultView: 'month',
	  editable: true,
	  events: sampleEvents,
		displayEventEnd: true,
		dayClick: new_event,
		eventClick: open_event,
	});

	// change Full Calendar default button labels
  $('.fc-month-button').text('Month');
  $('.fc-agendaWeek-button').text('Week');
  $('.fc-agendaDay-button').text('Day');
};

// TODO: Why are there blue dots to the left of the event
// name in the list view?

// TODO: It seems weird that the day of the week is allll
// the way on the right edge of the list, when
// everything else is on the left side. Can you move the day
// of the week to be next to the 'April 12 2017' part?
// there can be some amount of whitespace between them

// TODO: It's difficult to read the text with the dark
// green / dark purple background. Can you either choose
// different colors or just lighten those ones?
var listView = function() {
	$('#calendar').fullCalendar('destroy');
	$('#calendar').fullCalendar({
    // put your options and callbacks here
    header: {
      left: 'prev, next, today, title',
      right: 'listMonth, listWeek, listFiveDay, listDay'
    },
    views: {
      listFiveDay: {
          type: 'list',
          duration: { days: 5 },
          buttonText: '5 Day'
      }
    },
    defaultView: 'listMonth',
    editable: true,
    events: sampleEvents,
    displayEventEnd: true,
    dayClick: new_event,
    eventClick: open_event,
  });

	// change Full Calendar default button labels
	$('.fc-listMonth-button').text('Month');
	$('.fc-listWeek-button').text('Week');
	$('.fc-listDay-button').text('Day');
};

var filterEvents = function() {
	filters = $('.event-filter').children();
	filters.each(function(index, filter) {
		if (!filter.checked) {
			var filterType = filter.id.split('-')[0];
			$('.' + filterType + '-event').hide();
		}
	});
};

var toggleView = function(target) {
	if (target.checked)
		listView();
	else
		calendarView();
	filterEvents();
};