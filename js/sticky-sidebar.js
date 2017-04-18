$(document).ready(function() {
	// From http://www.bootply.com/100983
	/* smooth scrolling sections */
	$('a[href*=\\#]:not([href=\\#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top - 50
			}, 1000);
			return false;
		  }
		}
	});

	
	
	
	
	// From http://zurb.com/building-blocks/sticky-sidebar
	var stickySidebar = $('.sticky');

	if (stickySidebar.length > 0) { 
	  var stickyHeight = stickySidebar.height(),
		  sidebarTop = stickySidebar.offset().top;
	}

	// on scroll move the sidebar
	$(window).scroll(function () {
	  if (stickySidebar.length > 0) { 
		var scrollTop = $(window).scrollTop();

		if (sidebarTop < scrollTop) {
		  stickySidebar.css('top', scrollTop - sidebarTop);

		  // stop the sticky sidebar at the footer to avoid overlapping
		  var sidebarBottom = stickySidebar.offset().top + stickyHeight,
			  stickyStop = $('#main-content').offset().top + $('#main-content').height();
		  if (stickyStop < sidebarBottom) {
			var stopPosition = $('#main-content').height() - stickyHeight;
			stickySidebar.css('top', stopPosition);
		  }
		}
		else {
		  stickySidebar.css('top', '0');
		} 
	  }
	});

	$(window).resize(function () {
	  if (stickySidebar.length > 0) { 
		stickyHeight = stickySidebar.height();
	  }
	});
});