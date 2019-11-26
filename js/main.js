// full page section
var myFullpage = new fullpage('#fullpage', {
	verticalCentered: true,
	anchors: ['top', 'michi', 'teatora', 'skagen', 'workwithus'],
	sectionsColor: ['#fff', '#1BBC9B', '#7E8F7C', '#efefef', '#222'],
	navigation: true,
	navigationPosition: 'right',
	licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
});

// if #parallax do  
if (document.getElementById("parallax")) {
	const parallax = document.getElementById("parallax")
	window.addEventListener("scroll", function () {
		let offset = window.pageYOffset
		let num = -(offset * 0.3)
		parallax.style.backgroundPositionY = num + "px"
	})
}

// Typing animation instance
var typed = new Typed(".typed", {
	strings: [
		"Think W is specialized to build<br> eCommerce",
		"Think W is specialized to build<br> SEO Strategy",
		"Think W is specialized to build<br> Social Networking",
		"Think W is specialized to build<br> Digital Marketing Design"
	],
	typeSpeed: 40,
	startDelay: 2300,
	backDelay: 2400,
	backSpeed: 40,
	smartBackspace: true,
	// loop: true,
})
