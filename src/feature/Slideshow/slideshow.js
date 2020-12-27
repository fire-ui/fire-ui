var defaultIndex = 1;
activeSlide(defaultIndex);

function btnSlide(n) { activeSlide(defaultIndex += n); }
function currentSlide(n) { activeSlide(defaultIndex = n); }
function activeSlide(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow");
  var info = document.getElementsByClassName("info");
  if (n > slides.length) {defaultIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].classList.add("none");
  }
  for (i = 0; i < info.length; i++) {
      info[i].className = info[i].className.replace(" active", "");
  }
  slides[defaultIndex-1].classList.toggle("none");
  info[defaultIndex-1].className += " active";
}