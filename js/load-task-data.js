// Pre-Populated Tasks

// Outstanding
var task1 = {
  text: "Email John about reserving space for final exam",
  due: moment("04/30/2017").format(),
}

var task2 = {
  text: "Make the beta for Quiz 1",
  due: moment("05/01/2017").format(),
}

// Due today
var task3 = {
  text: "Ask TAs when they're available to host a Quiz 1 review session",
  due: moment("05/03/2017").format(),
}

var task4 = {
  text: "Pick up quiz materials from CopyTech",
  due: moment("05/03/2017").format(),
}

var task5 = {
  text: "Remind students that Quiz 1 is coming up in two weeks",
  due: moment("05/03/2017").format(),
}

// Due later
var task6 = {
  text: "Send Quiz 1 beta to TAs for testing",
  due: moment("05/04/2017").format(),
}

var task7 = {
  text: "Review notes for Lecture 13",
  due: moment("05/08/2017").format(),
}

var task8 = {
  text: "Review notes for Lecture 14",
  due: moment("05/15/2017").format(),
}

var task9 = {
  text: "Ask TAs when they can host extra OH",
  due: moment("05/15/2017").format(),
}


// TODO: add more filler tasks

var tasks = [
  task1,
  task2,
  task3,
  task4,
  task5,
  task6,
  task7,
  task8,
  task9,
];

// save data to local storage
window.localStorage.setItem("tasks", JSON.stringify(tasks));