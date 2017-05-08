var errorMessages = {
	missingStartTime: "* Event must have a start time",
	missingEndTime: "* Event must have an end time",
	invalidTimes: "* Beginning time must be before ending time",
	missingEventType: "* Must select an event type",
	missingEventName: "* Must choose an event name"
};


$(document).on('click', "#edit-event-btn", function(evt)
{
	$('#event-info-form').get(0).reset();
	$('#event-modal').modal('toggle');
	$('#new-event-modal').modal('toggle');
	$("#new_event_type").val(current_event.eventType);
	$("#new_event_name").val(current_event.title);
	$("#new_event_date").val(moment(current_event.start).format("MM/DD/YYYY"));
	$("#new_event_start_time").val(moment(current_event.start).format("HH:mm"));
	$("#new_event_end_time").val(moment(current_event.end).format("HH:mm"));
	$("#create-event-btn").text("Update");
	$("#change-event-modal-title").text("Edit Event");
});

$(document).on('click', "#create-event-btn", function(evt)
{
	var format_date = moment($("#new_event_date").val()).format("YYYY-MM-DD");
	var start = moment(format_date+" " +$("#new_event_start_time").val());
	var end = moment(format_date+" " +$("#new_event_end_time").val());

	/* Form Input Validation */
	var missingData = !$("#new_event_type").val() || !$("#new_event_name").val() || end.diff(start) <= 0 || 
										!$("#new_event_start_time").val() || !$("#new_event_end_time").val();
	if (missingData)
		validateInputs(start, end);
	else {
		// Create New Event
		var event = {};
		var action = 'renderEvent';
		if (current_event) {
			action = 'updateEvent';
			event = current_event;
			// remove event from local storage if it already exists
			var savedEvents = JSON.parse(window.localStorage.getItem("events"));
			savedEvents = savedEvents.filter(function(e) { return e.title !== event.title });  //again, assuming no events have the same name
			window.localStorage.setItem("events", JSON.stringify(savedEvents));
		}
		event.title = $("#new_event_name").val();
		event.start = start.format();
		event.end = end.format();
		event.className = $("#new_event_type").val().toLowerCase() + "-event";
		event.eventType = $("#new_event_type").val();

		// save new event to local storage
		var savedEvents = JSON.parse(window.localStorage.getItem("events"));
		savedEvents.push(event);
		window.localStorage.setItem("events", JSON.stringify(savedEvents));

		$('#calendar').fullCalendar(action, event);
		current_event = null;
		
		$('#new-event-modal').modal('toggle');
	}
});

/* Event Deletion Handling */
$(document).on('click', "#delete-event-btn", function(evt)
{
	$('#confirm-delete-event-modal').modal('toggle');
});

$(document).on('click', "#confirm-delete-btn", function(evt)
{
	// remove event from local storage
	var savedEvents = JSON.parse(window.localStorage.getItem("events"));
	savedEvents = savedEvents.filter(function(e) { return e.title !== current_event.title });  //again, assuming no events have the same name
	window.localStorage.setItem("events", JSON.stringify(savedEvents));

	$('#calendar').fullCalendar( 'removeEvents' , function(event) {
		return event === current_event;
	});
	current_event = null;
	$('#confirm-delete-event-modal').modal('toggle');
});
/* End Event Deletion Handling */


/* onChange listeners for when user updates the form to fix errors */

//TODO: debug these event listeners
/*$(document).on('change', '#new_event_type', function() {
	if ($("#new_event_type").val()) {
		$('#eventTypeError').remove();
	} 
});

$(document).on('change', '#new_event_name', function() {
	if ($("#new_event_name").val()) {
		$('#eventNameError').remove();
	} 
});

$(document).on('change', '#new_event_start_time', function() {
	console.log("blah");
	$('#startTimeError').remove();
});

$(document).on('change', '#new_event_end_time', function() {
	console.log("blah");
	$('#endTimeError').remove();
});*/

// Clear all error messages if modal is closed
$(document).on('click', '.close-modal', function() {
	$(".modalInputValidationMessage").remove();
});

var validateInputs = function(start, end) {
	if (!$("#new_event_type").val() && !document.getElementById('eventTypeError')) {
		var errorMessageHTMLString = `<p class="modalInputValidationMessage" id="eventTypeError">`+errorMessages.missingEventType+`</p>`;
		$("#new_event_type").after($.parseHTML(errorMessageHTMLString));
	} 
	else if ($("#new_event_type").val())
		$('#eventTypeError').remove();
	
	if (!$("#new_event_name").val() && !document.getElementById('eventNameError')) {
		var errorMessageHTMLString = `<p class="modalInputValidationMessage" id="eventNameError">`+errorMessages.missingEventName+`</p>`;
		$("#new_event_name").after($.parseHTML(errorMessageHTMLString));
	} 
	else if ($("#new_event_name").val())
		$('#eventNameError').remove();
	
	if ($("#new_event_start_time").val() && $("#new_event_end_time").val() && end.diff(start) <= 0 && !document.getElementById('eventTimeError')) {
		var errorMessageHTMLString = `<p class="modalInputValidationMessage" id="eventTimeError">`+errorMessages.invalidTimes+`</p>`;
		$("#new_event_start_time").after($.parseHTML(errorMessageHTMLString));
	} 
	else if (end.diff(start) > 0)
		$('#eventTimeError').remove();
	
	if (!$("#new_event_start_time").val() && !document.getElementById('startTimeError')) {
		var errorMessageHTMLString = `<p class="modalInputValidationMessage" id="startTimeError">`+errorMessages.missingStartTime+`</p>`;
		$("#new_event_start_time").after($.parseHTML(errorMessageHTMLString));
	}
	else if ($("#new_event_start_time").val())
		$('#startTimeError').remove();

	if (!$("#new_event_end_time").val() && !document.getElementById('endTimeError')) {
		var errorMessageHTMLString = `<p class="modalInputValidationMessage" id="endTimeError">`+errorMessages.missingEndTime+`</p>`;
		$("#new_event_end_time").after($.parseHTML(errorMessageHTMLString));
	}
	else if ($("#new_event_end_time").val())
		$('#endTimeError').remove();
};