// JS

window.onload = function() {

// Variable

	var loader = $('.loader');
	var logo = $('nav .logo');
	var hamburger = $('nav .hamburger');
	var hamburgerLine = $('nav .hamburger .line');
	var arrowLink = $('#index nav .arrow-link');
	var arrowLinkArrow = $('#index nav .arrow-link .arrow');
	var arrowLinkParagraph = $('#index nav .arrow-link p');

	var aboutArrowContainer = $(".arrow-link .arrow-about");
	var aboutParagraph = $(".arrow-link .arrow-about p");
	var aboutArrow = $(".arrow-link .arrow-about .arrow");
	var aboutPopUp = $(".about-pop-up");

	var contactArrowContainer = $(".arrow-link .arrow-contact");
	var contactParagraph = $(".arrow-link .arrow-contact p");
	var contactArrow = $(".arrow-link .arrow-contact .arrow");
	var contactPopUp = $(".contact-pop-up");

	var socialMedia = $("nav .social-media");
	var phone = $("nav .phone");

	var content = $(".section.header .content");
	var scroolDown = $(".scrool-down");

	var videoBG = $(".section.header video");
	var videoBGdarken = $(".section.header .video-darken");

// GSAP Animation

	var tl = new TimelineMax();

	tl.to(loader, .5, { opacity: "0", ease: Power2.easeInOut }, 2) // Opacity for loader
		.to(loader, 0, { zIndex: "-99999" }) // Z-Index for loader
		.to(hamburger, 0, { display: "block" }, -1) // Display for hamburger
		.to(logo, 1, { left: "0", transform: "translateX(0)", ease: Power4.easeOut }, 2) // Animation logo
		.to(hamburgerLine, .5, { opacity: "1", ease: Power4.easeInOut }, 2) // Opacity for hamburger

// Function

	// Scrolling parameters

	function scrollingParameters(param) {
		if (param == 'enable') {
			$.fn.fullpage.setMouseWheelScrolling(true);
			$.fn.fullpage.setAllowScrolling(true);
			$.fn.fullpage.setKeyboardScrolling(true);
		} else if (param == 'disable') {
			$.fn.fullpage.setMouseWheelScrolling(false);
			$.fn.fullpage.setAllowScrolling(false);
			$.fn.fullpage.setKeyboardScrolling(false);
		}
	}

	// Function for animation pop-up block

	function popUpAnimation(target, action) {
		if (target == 'about') {
			if (action == 'open') {
				aboutArrowContainer.addClass("open");
				aboutPopUp.addClass("open");
				contactArrow.addClass("btn-close");
				contactParagraph.addClass("btn-close");
				scroolDown.addClass("hide");
				content.fadeOut();
				logo.addClass("black");
				socialMedia.addClass("black");
				videoBGdarken.addClass("visible");
				scrollingParameters('disable');
			} else if (action == 'close') {
				aboutArrowContainer.removeClass("open");
				aboutPopUp.removeClass("open");
				contactArrow.removeClass("btn-close");
				contactParagraph.removeClass("btn-close");
				scroolDown.removeClass("hide");
				content.fadeIn();
				logo.removeClass("black");
				socialMedia.removeClass("black");
				videoBGdarken.removeClass("visible");
				scrollingParameters('enable');
			}
		} else if (target == 'contact') {
			if (action == 'open') {
				contactArrowContainer.addClass("open");
				contactPopUp.addClass("open");
				aboutArrow.addClass("btn-close");
				aboutParagraph.addClass("btn-close");
				scroolDown.addClass("hide");
				content.fadeOut();
				hamburger.addClass("black");
				phone.addClass("black");
				videoBGdarken.addClass("visible");
				scrollingParameters('disable');
			} else if (action == 'close') {
				contactArrowContainer.removeClass("open");
				contactPopUp.removeClass("open");
				aboutArrow.removeClass("btn-close");
				aboutParagraph.removeClass("btn-close");
				scroolDown.removeClass("hide");
				content.fadeIn();
				hamburger.removeClass("black");
				phone.removeClass("black");
				videoBGdarken.removeClass("visible");
				scrollingParameters('enable');
			}
		}
	};

	// Function click on navigation elements

	function clickOnNavElements(target) {
		target.click(function() {
			popUpAnimation('about', 'close');
			popUpAnimation('contact', 'close');
		});
	}

	// Function click on arrow button for open pop-up

	function clickOnPopUpButton(target) {
		if (target == 'about') {
			aboutArrowContainer.click(function() {
				if (!aboutArrow.hasClass("btn-close")) {
					popUpAnimation('about', 'open');
				} else {
					popUpAnimation('contact', 'close');
				}
			});
		} else if (target == 'contact') {
			contactArrowContainer.click(function() {
				if (!contactArrow.hasClass("btn-close")) {
					popUpAnimation('contact', 'open');
				} else {
					popUpAnimation('about', 'close');
				}
			});
		}
	}

	//	Nav desktop

	$("nav .hamburger").click(function() {
		if ($("nav.border-nav .hamburger").hasClass("open")) {
			$("nav.border-nav .hamburger").removeClass("open");
			$("nav.menu").removeClass("open");
		} else {
			$("nav.border-nav .hamburger").addClass("open");
			$("nav.menu").addClass("open");
		}
	});

	// Init function

	clickOnPopUpButton('about');
	clickOnPopUpButton('contact');

	clickOnNavElements($(".hamburger"));
}