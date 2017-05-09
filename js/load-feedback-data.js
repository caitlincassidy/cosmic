// Pre-Populated Events
var lecture1 = {
	title: "Lecture 1",
	className: "lecture-note",
	feedbackType: "Lecture",
}
var lecture2 = {
	title: "Lecture 2",
	className: "lecture-feedback",
	feedbackType: "Lecture",
}

var lecture3 = {
	title: "Lecture 3",
	className: "lecture-feedback",
	feedbackType: "Lecture",
}

var lecture4 = {
	title: "Lecture 4",
	className: "lecture-feedback",
	feedbackType: "Lecture",
}

var quiz1 = {
	title: "Quiz 1",
	className: "quiz-feedback",
	feedbackType: "Quiz",
}

var quiz2 = {
	title: "Quiz 2",
	className: "quiz-feedback",
	feedbackType: "Quiz",
}

var lab1 = {
	title: "Lab 1",
	className: "lab-feedback",
	feedbackType: "Lab",
}

var feedbacks = [
	lecture1,
	lecture2,
	lecture3,
	lecture4,
	quiz1,
	quiz2,
	lab1
];

// save data to local storage
window.localStorage.setItem("feedbacks", JSON.stringify(feedbacks));