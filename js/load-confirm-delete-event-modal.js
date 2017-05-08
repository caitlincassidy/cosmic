var confirmDeleteModalString = 
`<div class="modal-dialog">
	<!-- Modal Content -->
	<div class="modal-content">
		<div class="modal-header">
			<h3 class="modal-title">Are you sure you want to delete this event?</h3>
		</div>
		<div class="modal-body">
			<p>You will also be deleting all other notes, feedback, and information associated with this event.</p>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
			<button id="confirm-delete-btn" type="button" class="btn btn-primary">Delete</button>
		</div>
	</div>
</div>`;

var confirmDeleteModal = $.parseHTML(confirmDeleteModalString);
$("#confirm-delete-event-modal").append(confirmDeleteModal);

// Source: http://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file
// Source: http://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript