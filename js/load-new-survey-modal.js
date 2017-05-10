var request_availabilities_string = 
        `<div class="modal-dialog">
          <!-- Modal Content -->
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h3 class="modal-title">Request Availabilities</h3>
            </div>
            <div class="modal-body">
              <form id="request-availability-form">
                <div class="row">
                  <div class="col-xs-4">
                    <label for="availability_name"><b>Title:</b></label>
                    <input class="form-control" type="text" value="" id="availability_name">
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-4">
                    <label for="recipients_checkboxes"><b>Who to ask:</b></label>
                    <fieldset class="form-group" id="recipients_checkboxes">
                      <div class="form-check">
                        <label class="form-check-label">
                          <input id="inc_tas" class="form-check-input" type="checkbox" value="" checked>
                          TAs
                        </label>
                      </div>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input id="inc_las" class="form-check-input" type="checkbox" value="">
                          LAs
                        </label>
                      </div>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input id="inc_students" class="form-check-input" type="checkbox" value="">
                          Students
                        </label>
                      </div>
                    </fieldset>
                  </div>
                  <div class="col-xs-8">
                    <div class="row">
                      <label for="availabilities_dates" class="col-xs-4 col-form-label"><b>Dates:</b></label>
                      <div class="col-xs-8">
                        <input type="text" class="form-control" id="availabilities_dates" />
                      </div>
                    </div>
                    <div class="row">
                      <label for="availabilities_start_time" class="col-xs-4 col-form-label"><b>Start Time:</b></label>
                      <div class="col-xs-8">
                        <input class="form-control timepicker" type="text" value="" id="availabilities_start_time">
                      </div>
                    </div>
                    <div class="row">
                      <label for="availabilities_end_time" class="col-xs-4 col-form-label"><b>End Time:</b></label>
                      <div class="col-xs-8">
                        <input class="form-control timepicker" type="text" value="" id="availabilities_end_time">
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-xs-12">
                    <div class="form-group">
                      <label for="additional_info"><b>Additional Information</b></label>
                      <textarea class="form-control" id="additional_info" rows="3"></textarea>
                    </div>
                  </div>
                </div>

              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" id="send-new-survey-btn">Send</button>
            </div>
          </div>
        </div>`

var newSurveModal = $.parseHTML(request_availabilities_string);
$("#new-survey-modal").append(newSurveModal);

// Source: http://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file
// Source: http://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript