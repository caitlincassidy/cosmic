$(document).ready(function() {
  var menubarString = `
    <ul class="nav nav-pills nav-stacked">
    <li>
      <span class="menu-option glyphicon glyphicon-calendar" aria-hidden="true">
        <a href="index.html" class="menu-text"> Events </a>
      </span>
    </li>
    <li>
      <span class="menu-option glyphicon glyphicon-list" aria-hidden="true">
        <a href="tasks.html" class="menu-text"> Tasks </a>
      </span>
    </li>
    <li>
      <span class="menu-option glyphicon glyphicon-user" aria-hidden="true">
        <a href="availabilities.html" class="menu-text"> Availabilities </a>
      </span>
    </li>
    <li>
      <span class="menu-option glyphicon glyphicon-stats" aria-hidden="true">
        <a href="feedback.html" class="menu-text"> Feedback </a>
      </span>
    </li>
    <li>
      <span class="menu-option glyphicon glyphicon-pencil" aria-hidden="true">
        <a href="notes.html" class="menu-text"> Notes </a>
      </span>
    </li>
  </ul>

  <!-- SOURCE: http://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file -->

  `;
  // Source: http://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript


  var menubar = $.parseHTML(menubarString);
  $("#menubar").append(menubar);

})