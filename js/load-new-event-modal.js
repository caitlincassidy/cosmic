var newEventModalString = 
`<div class="modal-dialog">
	<!-- Modal Content -->
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal">&times;</button>
			<h3 class="modal-title" id="change-event-modal-title">New Event</h3>
		</div>
		<div class="modal-body">
			<form id="event-info-form">
				<div class="row">
					<label for="new_event_type" class="col-xs-3 col-form-label"><b>Type:</b></label>
					<div class="col-xs-9">
						<select class="form-control" id="new_event_type">
							<option value="" selected>Event Type</option>
							<option value="Lecture">Lecture</option>
							<option value="Quiz">Quiz</option>
							<option value="Lab">Lab</option>
						</select>
					</div>
				</div>
				<div class="row">
					<label for="new_event_name" class="col-xs-3 col-form-label"><b>Name:</b></label>
					<div class="col-xs-9">
						<input class="form-control" type="text" value="" id="new_event_name">
					</div>
				</div>
				<div class="row">
					<label for="new_event_date" class="col-xs-3 col-form-label"><b>Date:</b></label>
					<div class="col-xs-9">
						<input class="form-control" type="date" value="" id="new_event_date">
					</div>
				</div>
				<div class="row">
					<label for="new_event_start_time" class="col-xs-3 col-form-label"><b>Start Time:</b></label>
					<div class="col-xs-9">
						<input class="form-control" type="time" value="" id="new_event_start_time">
					</div>
				</div>
				<div class="row">
					<label for="new_event_end_time" class="col-xs-3 col-form-label"><b>End Time:</b></label>
					<div class="col-xs-9">
						<input class="form-control" type="time" value="" id="new_event_end_time">
					</div>
				</div>
			</form>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
			<button id="create-event-btn" type="button" class="btn btn-primary">Create</button>
		</div>
	</div>
</div>`;

var newEventModal = $.parseHTML(newEventModalString);
$("#new-event-modal").append(newEventModal);

// Source: http://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file
// Source: http://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript