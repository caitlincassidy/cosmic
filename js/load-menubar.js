$(document).ready(function() {
  var menubarString = `
  <ul class="nav nav-pills nav-stacked">
    <li role="presentation">
      <a href="index.html">
        <span class="glyphicon glyphicon-calendar"></span>
        Events
      </a>
    </li>

    <li role="presentation">
      <a href="tasks.html">
        <span class="glyphicon glyphicon-list"></span>
        Tasks
      </a>
    </li>

        <li role="presentation">
      <a href="availabilities.html">
        <span class="glyphicon glyphicon-user"></span>
        Availabilities
      </a>
    </li>

        <li role="presentation">
      <a href="feedback.html">
        <span class="glyphicon glyphicon-stats"></span>
        Feedback
      </a>
    </li>

    <li role="presentation">
      <a href="notes.html">
        <span class="glyphicon glyphicon-book"></span>
        Notes
      </a>
    </li>
</ul>

`;

  var menubar = $.parseHTML(menubarString);
  $("#menubar").append(menubar);
})

// Source: http://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file
// Source: http://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript
