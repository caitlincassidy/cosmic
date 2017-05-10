$(document).ready(function() {
    // Expand General
    $("#expand_gen").click(function() {
        $(".gen_col").collapse('show');
    })
    // Collapse General
    $("#collapse_gen").click(function() {
        $(".gen_col").collapse('hide');
    })
    
	// Expand all lectures
	$("#expand_all_lec").click(function() {
		$(".lec_col").collapse('show');
	});
	// Collapse all lectures
	$("#collapse_all_lec").click(function() {
		$(".lec_col").collapse('hide');
	});

	// Expand all quizzes
	$("#expand_all_quiz").click(function() {
		$(".quiz_col").collapse('show');
	});
	// Collapse all quizzes
	$("#collapse_all_quiz").click(function() {
		$(".quiz_col").collapse('hide');
	});

	// Expand all labs
	$("#expand_all_lab").click(function() {
		$(".lab_col").collapse('show');
	});
	// Collapse all labs
	$("#collapse_all_lab").click(function() {
		$(".lab_col").collapse('hide');
	});

});