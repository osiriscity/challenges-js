// MDN
// The DOMContentLoaded event fires when the inital HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole pages has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function(){
  if(!btn.classList.contains("slide")){
    btn.classList.add("slide");
    video.pause();
  } else{
   btn.classList.remove("slide");
   video.play();
  }
});