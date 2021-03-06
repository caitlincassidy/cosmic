// updates local storage based on filter checkbox input
var filterChangeHandler = function(evt, eventType, eventClassName) {
	if (evt.target.checked) {

		// remove filter from local storage
		var savedFilters = JSON.parse(window.localStorage.getItem("filters"));
		if (savedFilters) {
			savedFilters.splice(savedFilters.indexOf(eventType), 1);
			window.localStorage.setItem("filters", JSON.stringify(savedFilters));
		}

		// re-render previously filtered event
		var events = JSON.parse(window.localStorage.getItem("events"));
		events = events.filter(function(e) { return e.eventType === eventType; });
		$('#calendar').fullCalendar( 'renderEvents', events);
	}
	else {
		// add filter to local storage
		var savedFilters = JSON.parse(window.localStorage.getItem("filters"));
		if (savedFilters) {
			savedFilters.push(eventType);
			window.localStorage.setItem("filters", JSON.stringify(savedFilters));
		}
		else
			window.localStorage.setItem("filters", '["'+eventType+'"]');

		// hide filtered events
		$('#calendar').fullCalendar('removeEvents', function(event) { return event.eventType === eventType; });
	}
};

$(document).on('change', '#lecture-event-filter', function(evt) {
	filterChangeHandler(evt, 'Lecture', 'lecture-event');
});

$(document).on('change', '#quiz-event-filter', function(evt) {
  filterChangeHandler(evt, 'Quiz', 'quiz-event');
});

$(document).on('change', '#lab-event-filter', function(evt) {
	filterChangeHandler(evt, 'Lab', 'lab-event');
});

$(document).on('click', '#select-all-filters', function(evt) {
	console.log($('#lecture-event-filter'));
	if (!$('#lecture-event-filter')[0].checked)
		$('#lecture-event-filter').prop('checked', true).trigger('change');
	if (!$('#quiz-event-filter')[0].checked)
		$('#quiz-event-filter').prop('checked', true).trigger('change');
	if (!$('#lab-event-filter')[0].checked)
		$('#lab-event-filter').prop('checked', true).trigger('change');
});
$(document).on('click', '#clear-all-filters', function(evt) {
	if ($('#lecture-event-filter')[0].checked)
		$('#lecture-event-filter').prop('checked', false).trigger('change');
	if ($('#quiz-event-filter')[0].checked)
		$('#quiz-event-filter').prop('checked', false).trigger('change');
	if ($('#lab-event-filter')[0].checked)
		$('#lab-event-filter').prop('checked', false).trigger('change');
});