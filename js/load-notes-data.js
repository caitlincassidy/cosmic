// Pre-Populated Events
var lecture1 = {
	title: "Lecture 1",
	className: "lecture-event",
	eventType: "Lecture",
}
var lecture2 = {
	title: "Lecture 2",
	className: "lecture-event",
	eventType: "Lecture",
}

var quiz1 = {
	title: "Quiz 1",
	className: "quiz-event",
	eventType: "Quiz"
}

var lab1 = {
	title: "Lab 1",
	className: "lab-event",
	eventType: "Lab"
}

// TODO: add more filler events

var events = [
	lecture1,
	lecture2,
	quiz1,
	lab1
];

// save data to local storage
window.localStorage.clear();
window.localStorage.setItem("notes", JSON.stringify(events));