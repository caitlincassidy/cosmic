// add event button

var new_event = function(date) {
	current_event = null;
	var day;
	var time;
	if (date !== undefined) {
		if (date.format('HH:mm') !== '00:00') {
			day = date.format('YYYY-MM-DD');
			startTime = date.format('HH:mm');
			endTime = moment(date.format()).add(1, 'hours').format('HH:mm');
		}
		else {
			day = date.format();
			startTime = undefined;
			endTime = undefined;
		}
	}
	$('#event-info-form').get(0).reset();
	$("#change-event-modal-title").text("New Event");
	$("#create-event-btn").text("Create");
	$('#new-event-modal').modal('toggle');
	$("#new_event_date").val(day);
	$("#new_event_start_time").val(startTime);
	$("#new_event_end_time").val(endTime);
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



// necessary to cleanly update event
var current_event = null;

var calendarView = function() {
	var sampleEvents = JSON.parse(window.localStorage.getItem("events"));
	
	$('#calendar').fullCalendar('destroy');
	$('#calendar').fullCalendar({
		// put your options and callbacks here
		header: {
	    left: 'prev, next, today, title',
	    right: 'month, agendaWeek, agendaDay'
	  },
	  defaultView: 'month',
	  editable: true,
	  eventStartEditable: true,
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

var listView = function() {
	var sampleEvents = JSON.parse(window.localStorage.getItem("events"));

	$('#calendar').fullCalendar('destroy');
	$('#calendar').fullCalendar({
    // put your options and callbacks here
    header: {
      left: 'prev, next, today, title',
      right: 'listMonth, listWeek, listDay'
    },
    defaultView: 'listMonth',
    editable: true,
    events: sampleEvents,
    displayEventEnd: true,
    dayClick: new_event,
    eventClick: open_event,
    listDayFormat: 'dddd, MMMM Do',
    listDayAltFormat: false,
    eventMouseover: function(event, jsEvent, view) {
    	jsEvent.currentTarget.childNodes.forEach(function(child) {
    		child.style.color = 'gray';
    	});
    },
    eventMouseout: function(event, jsEvent, view) {
    	jsEvent.currentTarget.childNodes.forEach(function(child) {
    		child.style.color = 'white';
    	});
    }
  });

	// change Full Calendar default button labels
	$('.fc-listMonth-button').text('Month');
	$('.fc-listWeek-button').text('Week');
	$('.fc-listDay-button').text('Day');

	// get rid of weird blue dots
	$('.fc-list-item-marker').remove();
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
	if (target.id === "list-toggle")
		listView();
	else
		calendarView();
	filterEvents();
};

$(document).on('click', '#add-event-btn', function() {
	new_event();
});