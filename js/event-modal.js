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
        
		addNoteFromEvent();
        addFeedbacksFromEvent();
        
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
    
    removeNoteFromEvent();
    removeFeedbackFromEvent();
    
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


/***********************************************************************************
****************************** Notes Stuff *****************************************
************************************************************************************/

  // Bring in all Notes from Events local storage
  var addNoteFromEvent = function() {
      var events = JSON.parse(window.localStorage.getItem("events"));
      var notes = JSON.parse(window.localStorage.getItem("notes"));
      
      // If there are missing notes
      if (events.length > notes.length) {
          
          events.forEach(function(event) {
    //          console.log(event.title);
              // Boolean representing whether or not there is a note corresponding to the event
              var noteExists = false;
              notes.forEach(function(note) {
                  if (note.title == event.title){
                      noteExists = true;
                  }
              })
              // If an event doesn't have a note yet
            if (!noteExists) {
                var newNote = {
                    'text': "** You have not made any notes for this event yet! **",
                    'title': event.title,
                    'noteType': event.eventType,
                    'className': event.className.split('-')[0]+'-note'
                }
                console.log(newNote);
                addToLocalStorage(newNote);
                  // Need to create a note json object by parsing event
                  // Need to append it to proper header
              }
          })
      }
  }
  
    // There are too many notes, and at least one needs to be deleted.    
    var removeNoteFromEvent = function() {
        var events = JSON.parse(window.localStorage.getItem("events"));
        var notes = JSON.parse(window.localStorage.getItem("notes"));
        
        if (notes.length > events.length){
          notes.forEach(function(note) {
    //          console.log(event.title);
              // Boolean representing whether or not there is a note corresponding to the event
              var eventExists = false;
              events.forEach(function(event) {
                  if (note.title == event.title){
                      eventExists = true;
                  }
              })
              // If an event no longer exists, the note must be deleted
            if (!eventExists) {
                removeFromLocalStorage(note);
              }
          })
      }
  }
    
    
  /** 
   * Adds the given note from local storage.
   *
   * @param note a JSON object with 'text' and 'due' fields
   */
  var addToLocalStorage = function(note) {
    var savedNotes = JSON.parse(window.localStorage.getItem("notes"));
    savedNotes.push(note);
    window.localStorage.setItem("notes", JSON.stringify(savedNotes));
  }

  /** 
   * Removes the given note from local storage.
   *
   * @param note a JSON object with a 'text' fields
   */
  var removeFromLocalStorage = function(note) {
    // Assumes there are no notes with both the same text
    // and the same due date
    var savedNotes = JSON.parse(window.localStorage.getItem("notes"));
    var foundElt = savedNotes.find(function(elt) {
      return elt.text == note.text;
    });
    var indexToDelete = savedNotes.indexOf(foundElt);
    savedNotes.splice(indexToDelete, 1);
    window.localStorage.setItem("notes", JSON.stringify(savedNotes));
  }
  
/***********************************************************************************
****************************** Feedback Stuff *****************************************
************************************************************************************/
  
  
  // Bring in all Notes from Events local storage
  var addFeedbacksFromEvent = function() {
      var events = JSON.parse(window.localStorage.getItem("events"));
      var feedbacks = JSON.parse(window.localStorage.getItem("feedbacks"));
      
      // If there are missing notes
      if (events.length > feedbacks.length) {
          
          events.forEach(function(event) {
    //          console.log(event.title);
              // Boolean representing whether or not there is a note corresponding to the event
              var feedbackExists = false;
              feedbacks.forEach(function(feedback) {
                  if (feedback.title == event.title){
                      feedbackExists = true;
                  }
              })
              // If an event doesn't have a feedback yet
            if (!feedbackExists) {
                var newFeedback = {
                    'title': event.title,
                    'feedbackType': event.eventType,
                    'className': event.className.split('-')[0]+'-feedback',
                    'requested': "false"
                }
                console.log(newFeedback);
                addFeedbackToLocalStorage(newFeedback);
              }
          })
      }
  }
  

  
    // There are too many notes, and at least one needs to be deleted.    
    var removeFeedbackFromEvent = function() {
      var events = JSON.parse(window.localStorage.getItem("events"));
      var feedbacks = JSON.parse(window.localStorage.getItem("feedbacks"));
        
        if (feedbacks.length > events.length){
          feedbacks.forEach(function(feedback) {
    //          console.log(event.title);
              // Boolean representing whether or not there is a feedback corresponding to the event
              var eventExists = false;
              events.forEach(function(event) {
                  if (feedback.title == event.title){
                      eventExists = true;
                  }
              })
              // If an event no longer exists, the feedback must be deleted
            if (!eventExists) {
                removeFeedbackFromLocalStorage(feedback);
              }
          })
      }
  }
  /** 
   * Adds the given feedback from local storage.
   *
   * @param feedback a JSON object with 'text' and 'due' fields
   */
  var addFeedbackToLocalStorage = function(feedback) {
    var savedFeedbacks = JSON.parse(window.localStorage.getItem("feedbacks"));
    savedFeedbacks.push(feedback);
    window.localStorage.setItem("feedbacks", JSON.stringify(savedFeedbacks));
  }

  /** 
   * Removes the given feedback from local storage.
   *
   * @param feedback a JSON object with a 'text' fields
   */
  var removeFeedbackFromLocalStorage = function(feedback) {
    var savedFeedbacks = JSON.parse(window.localStorage.getItem("feedbacks"));
    var foundElt = savedFeedbacks.find(function(elt) {
      return elt.title == feedback.title;
    });
    var indexToDelete = savedFeedbacks.indexOf(foundElt);
    savedFeedbacks.splice(indexToDelete, 1);
    window.localStorage.setItem("feedbacks", JSON.stringify(savedFeedbacks));
  }