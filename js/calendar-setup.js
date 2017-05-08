// add event button

var new_event = function(date) {
	current_event = null;
	var day;
	var time;
	var startTime;
	var endTime;
	if (date !== undefined) {
		if (date.format('HH:mm') !== '00:00') {
			day = date.format('MM/DD/YYYY');
			startTime = date.format('h:mm a');
			endTime = moment(date.format()).add(1, 'hours').format('h:mm a');
		}
		else {
			day = date.format('MM/DD/YYYY');
			startTime = undefined;
			endTime = undefined;
		}
	}
	$('#event-info-form').get(0).reset();
	$("#change-event-modal-title").text("New Event");
	$("#create-event-btn").text("Create");
	$('#new-event-modal').modal('toggle');
	$("#new_event_date").daterangepicker({
		"applyClass": "btn-primary",
		"singleDatePicker": true,
		"startDate": day,
	});
	if (startTime !== undefined && endTime !== undefined) {
		$("#new_event_start_time").val(startTime);
		$("#new_event_end_time").val(endTime);
	}
	$('.timepicker').timepicker({
    timeFormat: 'h:mm a',
    interval: 60,
    startTime: '08:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true
});
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
	$('#calendar').fullCalendar('destroy');
	$('#calendar').fullCalendar({
		// put your options and callbacks here
		header: {
	    left: 'prev, next, today, title',
	    right: 'month, agendaWeek, agendaDay'
	  },
	  lazyFetching: false,  // This allows the events function to be called when the view switches
	  defaultView: 'month',
	  events: function(start, end, timezone, callback) {
	  	var events = JSON.parse(window.localStorage.getItem("events"));
	  	var filters = JSON.parse(window.localStorage.getItem("filters"));
	  	if (filters) {
	  		events = events.filter(function(e) { return filters.indexOf(e.eventType) < 0; });
	  	}
	  	callback(events);
	  },
	  fixedWeekCount: false,
	  contentHeight: 535,  // TODO: make it dynamically adjust to screen
	  editable: true,
	  eventStartEditable: true,
	  eventDrop: function(event, dayDelta, minuteDelta) {
	  	// save new event to local storage
	  	var eventTitle = event.title;  // TODO: put id's here? Or just assume there won't be events with the same title?
			var savedEvents = JSON.parse(window.localStorage.getItem("events"));
			// remove old event
			savedEvents = savedEvents.filter(function(e) { return e.title !== eventTitle; });
			// add updated event
			savedEvents.push(event);
			window.localStorage.setItem("events", JSON.stringify(savedEvents));
	  },
	  eventResize: function(event, dayDelta, minuteDelta) {
	  	// save new event to local storage
	  	var eventTitle = event.title;  // TODO: put id's here? Or just assume there won't be events with the same title?
			var savedEvents = JSON.parse(window.localStorage.getItem("events"));
			// remove old event
			savedEvents = savedEvents.filter(function(e) { return e.title !== eventTitle; });
			// add updated event
			savedEvents.push(event);
			window.localStorage.setItem("events", JSON.stringify(savedEvents));
	  },
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
    fixedWeekCount: false,
    contentHeight: 550,  // TODO: make it dynamically adjust to screen
    editable: true,
    lazyFetching: false,  // This allows the events function to be called when the view switches
    events: function(start, end, timezone, callback) {
	  	var events = JSON.parse(window.localStorage.getItem("events"));
	  	var filters = JSON.parse(window.localStorage.getItem("filters"));
	  	if (filters) {
	  		events = events.filter(function(e) { return filters.indexOf(e.eventType) < 0; });
	  	}
	  	callback(events);
	  },
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
    },
    eventAfterAllRender: function( view ) { 
    	// get rid of weird blue dots
			$('.fc-list-item-marker').remove();
    }
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
	if (target.id === "list-toggle")
		listView();
	else
		calendarView();
};

$(document).on('click', '#add-event-btn', function() {
	new_event();
});