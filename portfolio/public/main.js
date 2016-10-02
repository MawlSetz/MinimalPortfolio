// function toggleMain(direction) {
//   var slides = document.getElementsByClassName("hidable");
//   var visibleSlide = getVisibleSlides(slides);
//   //hide the currently visible LI
//   slides[visibleSlide].style.display = "none";
//   if(!direction) {
//     // get the previous slide
//     var makeVisible = previousSlide(visibleSlide, slides.length);
//   } else {
//     // get the next slide
//     var makeVisible = nextSlide(visibleSlide, slides.length);
//   }
//   slides[makeVisible].style.display = "block";
// }
//
// function getVisibleSlides(slides) {
//   var visibleSlide = -1;
//   for(var i = 0; i<= slides.length; i++) {
//     if(slides[i].style.display == "block"){
//       visibleSlide = i;
//     }
//   }
//   return visibleSlide;
// }
//
// function previousSlide(slideId, caroselLength) {
//   if(slideId == 0) return caroselLength - 1;
//   else return slideId -1
// }
//
// function nextSlide(slideId, caroselLength) {
//   if(slideId = caroselLength -1) return 0;
//   else return slideId + 1;
// }
//
