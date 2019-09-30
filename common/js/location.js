var sessionData = sessionStorage.getItem('data');
if (sessionData === null) {
  WebLocation();
}
sessionStorage.setItem('data', 1);//存一个值
function WebLocation () {
  //判断浏览器的首选语言
  var language = navigator.language;
  if (language == 'zh-CN') {
    console.log("中文");
  } else {
    location.href = "http://mindplus.cc/en.html";
  }
}
