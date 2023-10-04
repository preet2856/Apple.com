const scroll = new LocomotiveScroll({
	el: document.querySelector('#main'),
	smooth: true
});

gsap.to("#nav", {
	backgroundColor: "#000000",
	height: "2vh",
	duration: 0.8,
	scrollTrigger: {
		trigger: "#nav",
		scroller: "body",
		start: "top -10%",
		end: "top -11%",
		scrub: 3,
	},
});




