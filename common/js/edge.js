var getExplorer = (function () {
  var explorer = window.navigator.userAgent,
    compare = function (s) { return (explorer.indexOf(s) >= 0); },
    ie11 = (function () { return ("ActiveXObject" in window) })();
  if (compare("MSIE") || ie11) { return 'ie'; }
  else if (compare("Firefox") && !ie11) { return 'Firefox'; }
  else if (compare("Chrome") && !ie11) {
    if (explorer.indexOf("Edge") > -1) {
      return 'Edge';
    } else {
      return 'Chrome';
    }
  }
  else if (compare("Opera") && !ie11) { return 'Opera'; }
  else if (compare("Safari") && !ie11) { return 'Safari'; }

})()

var Dvideo = document.getElementsByTagName("video")[0];
var video = document.getElementById("video");
var videoIe = document.getElementById("videoIe");
var videoBtn11 = document.getElementById('videoImg');
var downloadBtn = document.getElementById("newDownloadBox");
var htmlBox = document.getElementsByTagName("html")[0];
var language = htmlBox.getAttribute("lang");
var textDescriptionContentBoxIe = document.getElementsByClassName('textDescriptionContentBox')[0];
var videoBtnIe = document.getElementById("videoImg2");
if (getExplorer == 'ie') {
  videoIe.style.display = "inherit";
  video.style.display = "none";
  videoBtn11.style.display = "none";
  videoBtnIe.style.display = "inherit";
  if (language == 'en') {
    console.log("textDescriptionContentBoxIe", textDescriptionContentBoxIe)
    textDescriptionContentBoxIe.style.paddingBottom = '7.2%';

  }
}
if (getExplorer == 'Edge') {
  videoIe.style.display = "inherit";
  video.style.display = "none";
  videoBtn11.style.display = "none";
  videoBtnIe.style.display = "inherit";
  if (language == 'en') {
    downloadBtn.style.marginBottom = '21.4%';
  }
}
