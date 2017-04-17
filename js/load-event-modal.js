var eventModalString = 
`<div class="modal-dialog">
	<!-- Modal Content -->
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal">&times;</button>
			<h3 class="modal-title" id="event-title"></h3>
		</div>
		<div class="modal-body">
			<div class="row">
				<label for="event_type" class="col-xs-3 col-form-label"><b>Type:</b></label>
				<div class="col-xs-9">
					<span id="event_type"></span>
				</div>
			</div>
			<div class="row">
				<label for="event_date" class="col-xs-3 col-form-label"><b>Date:</b></label>
				<div class="col-xs-9">
					<span id="event_date"></span>
				</div>
			</div>
			<div class="row">
				<label for="event_start_time" class="col-xs-3 col-form-label"><b>Start Time:</b></label>
				<div class="col-xs-9">
					<span id="event_start_time"></span>
				</div>
			</div>
			<div class="row">
				<label for="event_end_time" class="col-xs-3 col-form-label"><b>End Time:</b></label>
				<div class="col-xs-9">
					<span id="event_end_time"></span>
				</div>
			</div>

		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-default" data-dismiss="modal" id="delete-event-btn">Delete</button>
			<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
			<button id="edit-event-btn" type="button" class="btn btn-primary">Edit</button>
		</div>
	</div>
</div>`;

var eventModal = $.parseHTML(eventModalString);
$("#event-modal").append(eventModal);

// Source: http://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file
// Source: http://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript