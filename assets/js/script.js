var menu = document.querySelector(".ri-menu-3-line");
var close = document.querySelector(".ri-close-line");
var nav = document.querySelector(".responsive-nav");

menu.addEventListener("click", function () {
	nav.style.top = "0%";
})

close.addEventListener("click", function () {
	nav.style.top = "-100%";
})

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1.5,
	centeredSlides: true,
	spaceBetween: 15,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,
});

var toggleButton = document.getElementById("toggleButton");
var isPlaying = true;

toggleButton.addEventListener("click", function () {
	if (isPlaying) {
		swiper.autoplay.stop();
		toggleButton.innerHTML = '<i class="ri-play-circle-line"></i>';
	} else {
		swiper.autoplay.start();
		toggleButton.innerHTML = '<i class="ri-pause-circle-line"></i>';
	}

	isPlaying = !isPlaying;
});

