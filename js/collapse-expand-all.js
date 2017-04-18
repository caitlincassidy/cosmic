$(document).ready(function() {
	// Expand all for lectures
	$("#expand_all_lec").click(function() {
		$(".lec_col").collapse('show');
	});
	// Collapse all for lectures
	$("#collapse_all_lec").click(function() {
		$(".lec_col").collapse('hide');
	});

	// Expand all for quizzes
	$("#expand_all_quiz").click(function() {
		$(".quiz_col").collapse('show');
	});
	// Collapse all for quizzes
	$("#collapse_all_quiz").click(function() {
		$(".quiz_col").collapse('hide');
	});

	// Expand all for labs
	$("#expand_all_lab").click(function() {
		$(".lab_col").collapse('show');
	});
	// Collapse all for labs
	$("#collapse_all_lab").click(function() {
		$(".lab_col").collapse('hide');
	});

});