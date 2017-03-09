// JS

window.onload = function() {
	var loader = $('.loader');
	var logo = $('nav .logo');
	var hamburger = $('nav .hamburger');
	var hamburgerLine = $('nav .hamburger .line');
	var arrowLink = $('#index nav .arrow-link');
	var arrowLinkArrow = $('#index nav .arrow-link .arrow');
	var arrowLinkParagraph = $('#index nav .arrow-link p');

	var tl = new TimelineMax();

	tl.to(loader, .5, { opacity: "0", ease: Power2.easeInOut }, 2) // Opacity for loader
		.to(loader, 0, { zIndex: "-99999" }) // Z-Index for loader
		.to(hamburger, 0, { display: "block" }, -1) // Display for hamburger
		.to(logo, 1, { left: "0", transform: "translateX(0)", ease: Power4.easeOut }, 2) // Animation logo
		.to(hamburgerLine, .5, { opacity: "1", ease: Power4.easeInOut }, 2) // Opacity for hamburger

	// Nav desktop

	$('nav .hamburger').click(function() {
		if ($("nav.border-nav .hamburger").hasClass("open")) {
			$("nav.border-nav .hamburger").removeClass("open");
			$("nav.menu").removeClass("open");
		} else {
			$("nav.border-nav .hamburger").addClass("open");
			$("nav.menu").addClass("open");
		}
	});

	// function

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

	var content = $(".content");
	var scroolDown = $(".scrool-down");

	var videoBG = $(".section.header video");

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
			} else if (action == 'close') {
				aboutArrowContainer.removeClass("open");
				aboutPopUp.removeClass("open");
				contactArrow.removeClass("btn-close");
				contactParagraph.removeClass("btn-close");
				scroolDown.removeClass("hide");
				content.fadeIn();
				logo.removeClass("black");
				socialMedia.removeClass("black");
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
			} else if (action == 'close') {
				contactArrowContainer.removeClass("open");
				contactPopUp.removeClass("open");
				aboutArrow.removeClass("btn-close");
				aboutParagraph.removeClass("btn-close");
				scroolDown.removeClass("hide");
				content.fadeIn();
				hamburger.removeClass("black");
				phone.removeClass("black");
			}
		}
	};

	function clickOnNavElements(target) {
		target.click(function() {
			popUpAnimation('about', 'close');
			popUpAnimation('contact', 'close');
		});
	}

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

	clickOnPopUpButton('about');
	//clickOutsidePopUp('about');
	clickOnPopUpButton('contact');
	//clickOutsidePopUp('contact');

	clickOnNavElements($(".hamburger"));
}