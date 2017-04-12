// TODO: Make sure the icon next to the menu and on the actual page match
//    (only a problem for feedback I think -- page has pencil, menu has stats)

$(document).ready(function() {
  var menubarString = `
  <ul class="nav nav-pills nav-stacked">
    <li role="presentation">
      <a class="menu-link" href="index.html">
        <span class="glyphicon glyphicon-calendar"></span>
        Events
      </a>
    </li>

    <li role="presentation">
      <a class="menu-link" href="tasks.html">
        <span class="glyphicon glyphicon-list"></span>
        Tasks
      </a>
    </li>

        <li role="presentation">
      <a class="menu-link" href="availabilities.html">
        <span class="glyphicon glyphicon-user"></span>
        Availabilities
      </a>
    </li>

        <li role="presentation">
      <a class="menu-link" href="feedback.html">
        <span class="glyphicon glyphicon-stats"></span>
        Feedback
      </a>
    </li>

    <li role="presentation">
      <a class="menu-link" href="notes.html">
        <span class="glyphicon glyphicon-book"></span>
        Notes
      </a>
    </li>
</ul>

`;

  var menubar = $.parseHTML(menubarString);
  $("#menubar").append(menubar);

  // TODO: Keep menu bar in place even if scroll down
  // @Isaac since he did it for notes?
})

// Source: http://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file
// Source: http://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript
