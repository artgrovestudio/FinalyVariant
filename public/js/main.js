// JS

window.onload = function () {
  var loader = $('.loader');
  var logo = $('nav .logo');
  var hamburger = $('nav .hamburger');
  var elements = $('nav .elements');
  var hamburgerLine = $('nav .hamburger .line');
  var scroolDown = $('#index nav .scrool-down');
  var tl = new TimelineMax();

  tl.to(loader, .5, {opacity: "0", ease:Power2.easeInOut}, 2) // Opacity for loader
  .to(loader, 0, {zIndex: "-99999"}) // Z-Index for loader
  //.to(hamburger, 0, {display: "block"}, -1) // Display for hamburger
  .to(logo, 1, {left: "0", transform: "translateX(0)", ease:Power4.easeOut}, 2) // Animation logo
  //.to(hamburgerLine, .5, {opacity: "1", ease:Power4.easeInOut}, 2) // Opacity for hamburger
  .to(elements, 0, {display: "block"}, -1) // Display nav elements
  .to(elements, .5, {opacity: "1", ease:Power4.easeInOut}, 2)
  .to(scroolDown, 0, {display: "block"}, -1) // Display arrow
  .to(scroolDown, .5, {opacity: "1", ease:Power4.easeInOut}, 2)

  // Nav desktop

	$('.nav .hamburger').click(function(){
		if ($(".nav .hamburger").hasClass("hamburger-open")) {
			$(".nav .hamburger").removeClass("hamburger-open");
			$(".nav").removeClass("nav-desktop-open");
		}
		else {
			$(".nav .hamburger").addClass("hamburger-open");
			$(".nav").addClass("nav-open");
		}
	});
}
