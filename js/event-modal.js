$(document).on('click', "#edit-event-btn", function(evt)
{
	$('#event-info-form').get(0).reset();
	$('#event-modal').modal('toggle');
	$('#new-event-modal').modal('toggle');
	$("#new_event_type").val(current_event.eventType);
	$("#new_event_name").val(current_event.title);
	$("#new_event_date").val(moment(current_event.start).format("YYYY-MM-DD"));
	$("#new_event_start_time").val(moment(current_event.start).format("HH:mm"));
	$("#new_event_end_time").val(moment(current_event.end).format("HH:mm"));
	$("#create-event-btn").text("Update");
	$("#change-event-modal-title").text("Edit Event");
});

$(document).on('click', "#create-event-btn", function(evt)
{
	var start = moment($("#new_event_date").val()+" " +$("#new_event_start_time").val());
	var end = moment($("#new_event_date").val()+" " +$("#new_event_end_time").val());
	if (! $("#new_event_type").val()) {
		alert("Must choose an event type");
	} else if (! $("#new_event_name").val()) {
		alert("Must name event");
	} else if (end.isBefore(start)) {
		alert("Beginning time must be before ending time");
	} else {
		var event = {};
		var action = 'renderEvent';
		if (current_event) {
			action = 'updateEvent';
			event = current_event;
		}
		event.title = $("#new_event_name").val();
		event.start = start.format();
		event.end = end.format();
		event.className = $("#new_event_type").val().toLowerCase() + "-event";
		event.eventType = $("#new_event_type").val();

		$('#calendar').fullCalendar(action, event);
		current_event = null;

		// save new event to local storage
		var savedEvents = JSON.parse(window.localStorage.getItem("events"));
		savedEvents.push(event);
		window.localStorage.setItem("events", JSON.stringify(savedEvents));
		
		$('#new-event-modal').modal('toggle');
	}
});

$(document).on('click', "#delete-event-btn", function(evt)
{
	$('#calendar').fullCalendar( 'removeEvents' , function(event) {
		return event === current_event;
	});
	current_event = null;

	// get rid of weird blue dots
	$('.fc-list-item-marker').remove();
});