// JS

window.onload = function () {
  var loader = $('.loader');
  var logo = $('nav .logo');
  var hamburger = $('nav .hamburger');
  var hamburgerLine = $('nav .hamburger .line');
  var scroolDown = $('#index nav .scrool-down');
  var arrowLink = $('#index nav .arrow-link');
  var arrowLinkArrow = $('#index nav .arrow-link .arrow');
  var arrowLinkParagraph = $('#index nav .arrow-link p');

  var tl = new TimelineMax();

  tl.to(loader, .5, {opacity: "0", ease:Power2.easeInOut}, 2) // Opacity for loader
  .to(loader, 0, {zIndex: "-99999"}) // Z-Index for loader
  .to(hamburger, 0, {display: "block"}, -1) // Display for hamburger
  .to(logo, 1, {left: "0", transform: "translateX(0)", ease:Power4.easeOut}, 2) // Animation logo
  .to(hamburgerLine, .5, {opacity: "1", ease:Power4.easeInOut}, 2) // Opacity for hamburger
  .to(scroolDown, 0, {display: "block"}, -1) // Display arrow
  .to(scroolDown, .5, {opacity: "1", ease:Power4.easeInOut}, 2) // Opacity for arrow
  .to(arrowLink, 0, {display: "block"}, -1) // Display arrow
  .to(arrowLinkArrow, .5, {opacity: "1", ease:Power4.easeInOut}, 2) // Opacity for arrow
  .to(arrowLinkParagraph, .5, {opacity: "1", ease:Power4.easeInOut}, 2) // Opacity for arrow

  // Nav desktop

	$('nav .hamburger').click(function(){
		if ($("nav.border-nav .hamburger").hasClass("open")) {
			$("nav.border-nav .hamburger").removeClass("open");
			$("nav.menu").removeClass("open");
      $(arrowLink).fadeIn();
      $(scroolDown).fadeIn();
		}
		else {
			$("nav.border-nav .hamburger").addClass("open");
			$("nav.menu").addClass("open");
      $(arrowLink).fadeOut();
      $(scroolDown).fadeOut();
		}
	});
}
