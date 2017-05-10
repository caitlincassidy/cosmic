// Pre-Populated Events
var lecture1 = {
	title: "Lecture 1",
	className: "lecture-note",
	feedbackType: "Lecture",
    requested: "false",
    start: moment("04/12/2017 13:00").format(),
}
var lecture2 = {
	title: "Lecture 2",
	className: "lecture-feedback",
	feedbackType: "Lecture",
    requested: "false",
    start: moment("04/14/2017 13:00").format(),
}

var lecture3 = {
	title: "Lecture 3",
	className: "lecture-feedback",
	feedbackType: "Lecture",
    requested: "false",
    start: moment("05/02/2017 13:00").format(),
}

var lecture4 = {
	title: "Lecture 4",
	className: "lecture-feedback",
	feedbackType: "Lecture",
    requested: "false",
    start: moment("05/04/2017 13:00").format(),
}

var quiz1 = {
	title: "Quiz 1",
	className: "quiz-feedback",
	feedbackType: "Quiz",
    requested: "false",
    start: moment("04/28/2017 13:00").format(),
}

var quiz2 = {
	title: "Quiz 2",
	className: "quiz-feedback",
	feedbackType: "Quiz",
    requested: "given",
    start: moment("05/11/2017 19:00").format(),
}

var lab1 = {
	title: "Lab 1",
	className: "lab-feedback",
	feedbackType: "Lab",
    requested: "given",
    start: moment("04/26/2017 13:00").format(),
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