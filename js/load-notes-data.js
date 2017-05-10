// Pre-Populated Events
var lecture1 = {
	title: "Lecture 1",
	className: "lecture-note",
	noteType: "Lecture",
	text: "Everyone was really excited to learn! Make sure slides are loaded before class starts, though...",
    start: moment("04/12/2017 13:00").format()
}
var lecture2 = {
	title: "Lecture 2",
	className: "lecture-note",
	noteType: "Lecture",
	text: "The material wasn't easy for the students to understand.",
    start: moment("04/14/2017 13:00").format()
}

var lecture3 = {
	title: "Lecture 3",
	className: "lecture-note",
	noteType: "Lecture",
    text: "Blegh",
    start: moment("05/02/2017 13:00").format()
}

var lecture4 = {
	title: "Lecture 4",
	className: "lecture-note",
	noteType: "Lecture",
    text: "This is lecture 4",
    start: moment("05/04/2017 13:00").format()
}

var quiz1 = {
	title: "Quiz 1",
	className: "quiz-note",
	noteType: "Quiz",
	text: "Students felt adequately prepared, according to feedback.",
    start: moment("04/28/2017 13:00").format()
}

var quiz2 = {
	title: "Quiz 2",
	className: "quiz-note",
	noteType: "Quiz",
    text: "The quiz was hard.",
    start: moment("05/11/2017 19:00").format()
}

var lab1 = {
	title: "Lab 1",
	className: "lab-note",
	noteType: "Lab",
	text: "The readme needs to be clearer - a lot of confused Piazza posts.",
    start: moment("04/26/2017 13:00").format()
}

var notes = [
	lecture1,
	lecture2,
	lecture3,
	lecture4,
	quiz1,
	quiz2,
	lab1
];

// save data to local storage
window.localStorage.setItem("notes", JSON.stringify(notes));