const video = document.getElementById("background-video");
const pauseButton = document.getElementById("pause-button");
pauseButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    // pauseButton.textContent = "||";
  } else {
    video.pause();
    // pauseButton.textContent = "►";
  }
});
