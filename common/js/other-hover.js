var videoBox = document.getElementById("videoBox");
var progressBar = document.getElementsByClassName('Dvideo-progress-content')[0];
var menuBox = document.getElementsByClassName('Dvideo-ctrl')[0];

videoBox.addEventListener("mouseenter", function () {
  progressBar.style.display = "inherit";
  menuBox.style.display = "inherit";
})
videoBox.addEventListener("mouseleave", function () {
  progressBar.style.display = "none"
  menuBox.style.display = "none"
})