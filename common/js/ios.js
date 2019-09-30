window.onload = function () {
  var video = document.getElementById("video");
  var videoImg = document.getElementById("videoImg");
  // 
  var videoIe = document.getElementById("videoIe");
  //判断用户手机类型
  var u = navigator.userAgent, app = navigator.appVersion;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
  var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isAndroid) {
    console.log("这里安卓手机")
  }
  if (isIOS) {//判断为苹果手机
    // 判断是否为QQ和微信内置的浏览器
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/ qq/i) == ' qq' || ua.indexOf('micromessenger') > -1) {
      video.style.display = "none";
      videoImg.style.display = "none";
      videoIe.style.display = "inherit";
    }
  }
}