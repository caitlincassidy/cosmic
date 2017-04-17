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

		$(document).ready(function() {

  			// page is now ready, initialize the calendar...
  			$('#calendar').fullCalendar({
      			// put your options and callbacks here
      			weekends: false, // will hide Saturdays and Sundays
      			displayEventEnd: true,
      			dayClick: new_event,
      			eventClick: open_event,
      		});

  			$('#calendar').fullCalendar('renderEvent', lecture1);
  			$('#calendar').fullCalendar('renderEvent', lecture2);
  			$('#calendar').fullCalendar('renderEvent', quiz1);
  		});

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
				$('#new-event-modal').modal('toggle');
			}
		});

		$(document).on('click', "#delete-event-btn", function(evt)
		{
			$('#calendar').fullCalendar( 'removeEvents' , function(event) {
				return event === current_event;
			});
			current_event = null;
		});