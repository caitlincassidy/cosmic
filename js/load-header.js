var headerString = 
 `<div class="col-lg-2 title-header">
		<h1> C&nbsp;O&nbsp;S&nbsp;M&nbsp;I&nbsp;C </h1>
	</div>
	<div class="col-lg-10 page-title-header">
		<h2>
			<span class="glyphicon glyphicon-calendar" aria-hidden="true"></span> Events
		</h2>
	</div>`;
	/*<div class="col-lg-2">
		<div class="row logout-btn-container">
			<a id="logout" class="btn btn-outline-secondary btn-lg" href="login.html">Logout</a>
		</div>
	</div>`;*/

var header = $.parseHTML(headerString);
$(".main-header").append(header);

// Source: http://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file
// Source: http://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript