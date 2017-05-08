// Pre-Populated Events
var lecture1 = {
	title: "Lecture 1",
	className: "lecture-note",
	noteType: "Lecture",
	text: "Everyone was really excited to learn! Make sure slides are loaded before class starts, though..."
}
var lecture2 = {
	title: "Lecture 2",
	className: "lecture-note",
	noteType: "Lecture",
	text: ""
}

var quiz1 = {
	title: "Quiz 1",
	className: "quiz-note",
	noteType: "Quiz",
	text: "Students felt adequately prepared, according to feedback."
}

var lab1 = {
	title: "Lab 1",
	className: "lab-note",
	noteType: "Lab",
	text: "The readme needs to be clearer - a lot of confused Piazza posts."
}

// TODO: add more filler events

var notes = [
	lecture1,
	lecture2,
	quiz1,
	lab1
];

// save data to local storage
window.localStorage.setItem("notes", JSON.stringify(notes));