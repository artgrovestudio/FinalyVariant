var tl = new TimelineMax();

tl.to(loader, .5, { opacity: "0", ease: Power2.easeInOut }, 2) // Opacity for loader
	.to(loader, 0, { zIndex: "-99999" }) // Z-Index for loader
	.to(hamburger, 0, { display: "block" }, -1) // Display for hamburger
	.to(logo, 1, { left: "0", transform: "translateX(0)", ease: Power4.easeOut }, 2) // Animation logo
	.to(hamburgerLine, .5, { opacity: "1", ease: Power4.easeInOut }, 2) // Opacity for hamburger