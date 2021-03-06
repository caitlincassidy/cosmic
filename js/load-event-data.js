// Pre-Populated Events
var lecture1 = {
	title: "Lecture 1",
	start: moment("04/04/2017 13:00").format(),
	end: moment("04/04/2017 14:00").format(),
	className: "lecture-event",
	eventType: "Lecture",
}
var lecture2 = {
	title: "Lecture 2",
	start: moment("04/06/2017 13:00").format(),
	end: moment("04/06/2017 14:00").format(),
	className: "lecture-event",
	eventType: "Lecture",
}

var lecture3 = {
	title: "Lecture 3",
	start: moment("04/11/2017 13:00").format(),
	end: moment("04/11/2017 14:00").format(),
	className: "lecture-event",
	eventType: "Lecture"
}

var lecture4 = {
	title: "Lecture 4",
	start: moment("04/13/2017 13:00").format(),
	end: moment("04/13/2017 14:00").format(),
	className: "lecture-event",
	eventType: "Lecture"
}

var lecture5 = {
	title: "Lecture 5",
	start: moment("04/18/2017 13:00").format(),
	end: moment("04/18/2017 14:00").format(),
	className: "lecture-event",
	eventType: "Lecture"
}

var lecture6 = {
	title: "Lecture 6",
	start: moment("04/20/2017 13:00").format(),
	end: moment("04/20/2017 14:00").format(),
	className: "lecture-event",
	eventType: "Lecture"
}

var lecture7 = {
	title: "Lecture 7",
	start: moment("04/25/2017 13:00").format(),
	end: moment("04/25/2017 14:00").format(),
	className: "lecture-event",
	eventType: "Lecture"
}

var lecture8 = {
	title: "Lecture 8",
	start: moment("04/27/2017 13:00").format(),
	end: moment("04/27/2017 14:00").format(),
	className: "lecture-event",
	eventType: "Lecture"
}

var lecture9 = {
	title: "Lecture 9",
	start: moment("05/02/2017 13:00").format(),
	end: moment("05/02/2017 14:00").format(),
	className: "lecture-event",
	eventType: "Lecture"
}

var lecture10 = {
	title: "Lecture 10",
	start: moment("05/04/2017 13:00").format(),
	end: moment("05/04/2017 14:00").format(),
	className: "lecture-event",
	eventType: "Lecture"
}

var lecture11 = {
	title: "Lecture 11",
	start: moment("05/09/2017 13:00").format(),
	end: moment("05/09/2017 14:00").format(),
	className: "lecture-event",
	eventType: "Lecture"
}

var lecture12 = {
	title: "Lecture 12",
	start: moment("05/11/2017 13:00").format(),
	end: moment("05/11/2017 14:00").format(),
	className: "lecture-event",
	eventType: "Lecture"
}

var lecture13 = {
	title: "Lecture 13",
	start: moment("05/16/2017 13:00").format(),
	end: moment("05/16/2017 14:00").format(),
	className: "lecture-event",
	eventType: "Lecture"
}

var lecture14 = {
	title: "Lecture 14",
	start: moment("05/18/2017 13:00").format(),
	end: moment("05/18/2017 14:00").format(),
	className: "lecture-event",
	eventType: "Lecture"
}

var lecture15 = {
	title: "Lecture 15",
	start: moment("05/23/2017 13:00").format(),
	end: moment("05/23/2017 14:00").format(),
	className: "lecture-event",
	eventType: "Lecture"
}

var quiz1 = {
	title: "Quiz 1",
	start: moment("04/26/2017 19:00").format(),
	end: moment("04/26/2017 21:00").format(),
	className: "quiz-event",
	eventType: "Quiz"
}

var quiz2 = {
	title: "Quiz 2",
	start: moment("05/25/2017 19:00").format(),
	end: moment("05/25/2017 21:00").format(),
	className: "quiz-event",
	eventType: "Quiz"
}

var lab1 = {
	title: "Lab 1",
	start: moment("04/14/2017 13:00").format(),
	end: moment("04/14/2017 14:00").format(),
	className: "lab-event",
	eventType: "Lab"
}

var lab2 = {
	title: "Lab 2",
	start: moment("04/28/2017 13:00").format(),
	end: moment("04/28/2017 14:00").format(),
	className: "lab-event",
	eventType: "Lab"
}

var lab3 = {
	title: "Lab 3",
	start: moment("05/12/2017 13:00").format(),
	end: moment("05/12/2017 14:00").format(),
	className: "lab-event",
	eventType: "Lab"
}

// TODO: add more filler events

var events = [
	lecture1,
	lecture2,
	lecture3,
	lecture4,
	lecture5,
	lecture6,
	lecture7,
	lecture8,
	lecture9,
	lecture10,
	lecture11,
	lecture12,
	lecture13,
	lecture14,
	lecture15,
	quiz1,
	quiz2,
	lab1,
	lab2,
	lab3
];

// save data to local storage
window.localStorage.clear();
window.localStorage.setItem("events", JSON.stringify(events));