var url = window.location.href;
var locs = url.split('/');
var page = locs[locs.length-1];
page = locs[locs.length-1].substring(0, page.length-5);
var header = page;
header = page[0].toUpperCase() + page.substring(1);

if (page === 'index') {
	header = 'Events';
}

var icons = {
	'Events': 'calendar',
	'Tasks': 'list',
	'Availabilities': 'user',
	'Feedback': 'stats',
	'Notes': 'book'
}

var headerString = 
 `<div class="col-lg-2 title-header">
		<h1> C&nbsp;O&nbsp;S&nbsp;M&nbsp;I&nbsp;C </h1>
	</div>
	<div class="col-lg-8 page-title-header">
		<hr>
		<h2>
			<span class="glyphicon glyphicon-`+ icons[header] + `" aria-hidden="true"></span> ` + header +
		`</h2>
		<hr>
	</div>
	<div class="col-lg-2">
		<div class="row logout-btn-container">
			<a id="logout" class="btn btn-outline-secondary btn-lg" href="login.html">Logout</a>
		</div>
	</div>`;

var header = $.parseHTML(headerString);
$(".main-header").append(header);

// Source: http://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file
// Source: http://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript