document.addEventListener("DOMContentLoaded", () => {
	var marquee = document.querySelectorAll('marquee');
	for(let i=0; i<marquee.length; i++){
		marquee[i].setAttribute('scrollamount', '10');
	}
	for(let x=0; x<marquee.length; x++){
		if(marquee[x].hasAttribute('data-speed')){
			var speed = document.getElementsByTagName('marquee')[x].getAttribute('data-speed');
			document.getElementsByTagName('marquee')[x].setAttribute('scrollamount', speed);
		}
	}
	document.querySelectorAll(".marquee").forEach(marquee => {
		let direction = marquee.dataset.direction === "up" || marquee.dataset.direction === "down" ? "vertical" : "horizontal";
		if(marquee.dataset.speed) marquee.querySelector('.marquee-content').style.animation = `marquee-${direction} ${marquee.dataset.speed}s linear infinite`;
	})
})