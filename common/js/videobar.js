var videoIe = document.getElementById("videoIe");
var videoBtnIe = document.getElementById("videoImg2");
// =========================ie============================
videoBtnIe.addEventListener("click", function () {
  videoIe.play();
  videoBtnIe.style.display = "none";
})
videoIe.addEventListener('playing', function () {
  if (videoIe.paused == false) {//视频播放的时候
    videoBtnIe.style.display = "none";
  }
})
videoIe.addEventListener("pause", function () {
  if (videoIe.paused == true) {//视频暂停的时候
    videoBtnIe.style.display = "inherit";
  }
})
// ==========================
