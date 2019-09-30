; (function () {
  var newDownloadBox = document.getElementById("newDownloadBox");
  var htmlLang = document.getElementsByTagName('html')[0].lang;
  newDownloadBox.onclick = function () {
    if (htmlLang === 'zh-CN') {
      location.href = "download.html"
    } else {
      location.href = "download-en.html"
    }
  }
})();   