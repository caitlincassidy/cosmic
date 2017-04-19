$(document).on('change', '#lecture-event-filter', function(evt) {
	if (evt.target.checked)
		$('.lecture-event').show();
	else
		$('.lecture-event').hide();
});

$(document).on('change', '#quiz-event-filter', function(evt) {
  if (evt.target.checked)
  	$('.quiz-event').show();
  else
  	$('.quiz-event').hide();
});

$(document).on('change', '#lab-event-filter', function(evt) {
	if (evt.target.checked)
		$('.lab-event').show();
	else
		$('.lab-event').hide();
});

$(document).on('click', '#select-all-filters', function(evt) {
	$('#lecture-event-filter').prop('checked', true).trigger('change');
	$('#quiz-event-filter').prop('checked', true).trigger('change');
	$('#lab-event-filter').prop('checked', true).trigger('change');
});
$(document).on('click', '#clear-all-filters', function(evt) {
	$('#lecture-event-filter').prop('checked', false).trigger('change');
	$('#quiz-event-filter').prop('checked', false).trigger('change');
	$('#lab-event-filter').prop('checked', false).trigger('change');
});