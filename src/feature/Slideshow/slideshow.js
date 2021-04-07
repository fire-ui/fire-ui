var defaultIndex = 1;
activeSlide(defaultIndex);

function btnSlide(n) { activeSlide(defaultIndex += n); }
function currentSlide(n) { activeSlide(defaultIndex = n); }
function activeSlide(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow");
  var info = document.getElementsByClassName("slideshow-dot");
  if (n > slides.length) {defaultIndex = 1}
  if (n < 1) {defaultIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].classList.add("slideshow-none");
  }
  for (i = 0; i < info.length; i++) {
      info[i].className = info[i].className.replace(" slideshow-active", "");
  }
  if(slides[defaultIndex - 1]) slides[defaultIndex-1].classList.toggle("slideshow-none");
  if(info[defaultIndex - 1]) info[defaultIndex-1].className += " slideshow-active";
}

document.querySelectorAll(".slideshow-container").forEach(slideshow => {
  slideshow.querySelectorAll(".slideshow").forEach(sl => {
      if(sl !== slideshow.querySelector(".slideshow")) sl.classList.add("slideshow-none") // Add slideshow-none class name if it is not the first type of element
  })
})