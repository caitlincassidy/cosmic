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

var lecture3 = {
	title: "Lecture 3",
	start: moment("05/02/2017 13:00").format(),
	end: moment("05/02/2017 14:00").format(),
	className: "lecture-event",
	eventType: "Lecture"
}

var lecture4 = {
	title: "Lecture 4",
	start: moment("05/04/2017 13:00").format(),
	end: moment("05/04/2017 14:00").format(),
	className: "lecture-event",
	eventType: "Lecture"
}

var quiz1 = {
	title: "Quiz 1",
	start: moment("04/28/2017 13:00").format(),
	end: moment("04/28/2017 14:00").format(),
	className: "quiz-event",
	eventType: "Quiz"
}

var quiz2 = {
	title: "Quiz 2",
	start: moment("05/11/2017 19:00").format(),
	end: moment("05/11/2017 21:00").format(),
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
	lecture3,
	lecture4,
	quiz1,
	quiz2,
	lab1
];

// save data to local storage
window.localStorage.clear();
window.localStorage.setItem("events", JSON.stringify(events));