var data1 = {
	id: "initial-staff-meeting",
	title: "Initial Staff Meeting",
	tas_asked: true,
	las_asked: true,
	students_asked: false,
	start_date: moment("2017-02-13"),
	end_date: moment("2017-02-17"),
	start_time: moment("2017-02-13 05:00 PM"), // use first date to make it a valid moment
	end_time: moment("2017-02-13 09:00 PM"),
}

var data2 = {
	id: "office-hours",
	title: "Office Hours",
	tas_asked: true,
	las_asked: true,
	students_asked: false,
	start_date: moment("2017-02-20"),
	end_date: moment("2017-02-24"),
	start_time: moment("2017-02-20 09:00 AM"), // use first date to make it a valid moment
	end_time: moment("2017-02-20 09:00 PM"),
}

var data3 = {
	id: "quiz1-review-session",
	title: "Quiz 1 Review Session",
	tas_asked: true,
	las_asked: false,
	students_asked: false,
	start_date: moment("2017-03-20"),
	end_date: moment("2017-03-23"),
	start_time: moment("2017-03-20 07:30 PM"), // use first date to make it a valid moment
	end_time: moment("2017-03-20 09:30 PM"),
}

// populate surveys
var surveys = [data1, data2, data3];
var tas = ["Rachel", "Caitlin", "Becky", "Isaac"];
var las = ["Laura", "Ben", "Louis", "Ricky", "Kelly"];
var students = ["Kim", "Dan", "Alice", "Bob", "Rob", "Melinda"];

var populate = function(people_set, start_time, end_time, num_days) {
	var time = moment(start_time);
	var ret = {};
	while (time.isBefore(end_time)) {
		var label = time.format("LT");
		var days_arr = [];
		for (var i = 0; i < num_days; i ++) {
			var available = [];
			var unavailable = [];
			people_set.forEach(function(person) {
				if (Math.random() < .5) {
					available.push(person);
				} else {
					unavailable.push(person);
				}
			});
			days_arr.push({"available": available, "unavailable": unavailable});
		}
		ret[label] = days_arr;

		time.add(30, 'minute');
	}
	return ret;
}

// randomly populate
surveys.forEach(function(survey) {
	var num_days = survey.end_date.diff(survey.start_date, 'days')+1;
	if (survey.tas_asked) {
		survey["ta_results"] = populate(tas, survey.start_time, survey.end_time, num_days);
	} else {
		survey["ta_results"] = {};
	}
	if (survey.las_asked) {
		survey["la_results"] = populate(las, survey.start_time, survey.end_time, num_days);
	} else {
		survey["la_results"] = {};
	}
	if (survey.students_asked) {
		survey["students_results"] = populate(students, survey.start_time, survey.end_time, num_days);
	} else {
		survey["student_results"] = {};
	}
});

// save data to local storage
window.localStorage.clear();
window.localStorage.setItem("availabilities", JSON.stringify(surveys));
