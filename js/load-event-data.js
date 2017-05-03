// Pre-Populated Events
var lecture1 = {
	title: "Lecture 1",
	start: moment("04/12/2017 13:00").format(),
	end: moment("04/12/2017 14:00").format(),
	className: "lecture-event",
	eventType: "Lecture",
}
var lecture2 = {
	title: "Lecture 2",
	start: moment("04/14/2017 13:00").format(),
	end: moment("04/14/2017 14:00").format(),
	className: "lecture-event",
	eventType: "Lecture",
}

var quiz1 = {
	title: "Quiz 1",
	start: moment("04/28/2017 13:00").format(),
	end: moment("04/28/2017 14:00").format(),
	className: "quiz-event",
	eventType: "Quiz"
}

var lab1 = {
	title: "Lab 1",
	start: moment("04/26/2017 13:00").format(),
	end: moment("04/26/2017 14:00").format(),
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
window.localStorage.setItem("events", JSON.stringify(events));