var headerString = 
`<div class="col-lg-8">
		<h1> C&nbsp;O&nbsp;S&nbsp;M&nbsp;I&nbsp;C </h1>
	</div>
	<div class="col-lg-2">
		<div class="row">
			<a id="login" class="btn btn-outline-secondary btn-lg" href="login.html">Logout</a>
		</div>
</div>`;

var header = $.parseHTML(headerString);
$(".main-header").append(header);

// Source: http://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file
// Source: http://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript