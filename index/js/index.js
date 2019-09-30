
window.onload = function () {
  var video = g('#video');
  var videoBtn = g('#videoImg');
  var full = g('#full');
  var progressBar = g('ctrl');
  var onewTime = g('#now');
  var dot = g('#co');
  var VolumeBarDot = g('#vo');
  var VolumeBarAll = g('#vol');
  var VolumeBarAllWidth = VolumeBarAll.offsetWidth;
  var VolumeBarDotWidth = VolumeBarDot.offsetWidth;
  var progressBarWidth = progressBar[1].offsetWidth;
  var dotWidth = dot.offsetWidth;
  var playIcon = g('#img1');
  var progressBarColor = g('em')[0];
  var VolumeBar = g('em')[1];
  var allTime = g('#all');
  var voiceBtn = g('#img2');
  var iTimer = null;
  var onOff = true;
  var menuBox = g("#menuBox");
  var videoBox = g('videoBox')[0];
  // ==================监听页面是否暂停或者是播放完毕和正在播放==========================
  window.document = addEventListener('video.ended', function () {
    videoBtn.style.display = "inherit";
    playIcon.src = '../image/smallplay.svg';
  })
  // window.document = addEventListener('video.paused', function () {
  //   videoBtn.style.display = "inherit";
  //   console.log("-----")
  //   playIcon.src = '../image/smallplay.svg';
  // })
  // window.document = addEventListener('video.play', function () {
  //   videoBtn.style.display = "inherit";
  //   playIcon.src = '../image/pause.svg';
  // })
  // ==================中间播放按钮======================
  // 点击播放按钮视频播放并且隐藏播放按钮
  videoBtn.addEventListener('click', function () {
    video.play();
    videoBtn.style.display = "none";
    playIcon.src = '../image/pause.svg';
    iTimer = setInterval(function () {
      var scale = video.currentTime / video.duration;
      newTimeF();
      dot.style.left = (progressBarWidth - dotWidth) * scale + 'px';
      progressBarColor.style.width = (progressBarWidth - dotWidth) * scale + 1 + 'px';
    }, 30);
  })
  playIcon.addEventListener('click', function () {
    if (video.paused == true) {
      video.play();
      videoBtn.style.display = "none";
      playIcon.src = '../image/pause.svg';
      iTimer = setInterval(function () {
        var scale = video.currentTime / video.duration;
        newTimeF();
        dot.style.left = (progressBarWidth - dotWidth) * scale + 'px';
        progressBarColor.style.width = (progressBarWidth - dotWidth) * scale + 1 + 'px';
      }, 30);
    } else {
      video.pause();
      playIcon.src = '../image/smallplay.svg';
      videoBtn.style.display = "inherit";
      clearInterval(iTimer);
    }
  })
  //点击屏幕视频停止播放并且显示播放按钮
  video.addEventListener('click', function () {
    if (video.paused == true) {
      video.play();
      videoBtn.style.display = "none";
      playIcon.src = '../image/pause.svg';
      iTimer = setInterval(function () {
        var scale = video.currentTime / video.duration;
        newTimeF();
        dot.style.left = (progressBarWidth - dotWidth) * scale + 'px';
        progressBarColor.style.width = (progressBarWidth - dotWidth) * scale + 1 + 'px';
      }, 30);
    } else {
      video.pause();
      playIcon.src = '../image/smallplay.svg';
      videoBtn.style.display = "inherit";
      clearInterval(iTimer);
    }
  })
  //阻止空格事件的默认网页滚动效果
  document.body.onkeydown = function (event) {
    var e = window.event || event;
    if (e.keyCode == 32) {
      e.preventDefault();
    }
  }
  // 按下空格keyCode=32停止播放并且显示播放按钮
  window.document = addEventListener('keydown', function (event) {
    if (event.keyCode == 32) {
      // 判断视频是否在播放 
      if (video.paused == true) {
        video.play();
        videoBtn.style.display = "none";
        playIcon.src = '../image/pause.svg';
        iTimer = setInterval(function () {
          var scale = video.currentTime / video.duration;
          newTimeF();
          dot.style.left = (progressBarWidth - dotWidth) * scale + 'px';
          progressBarColor.style.width = (progressBarWidth - dotWidth) * scale + 1 + 'px';
        }, 30);
      } else {
        video.pause();
        videoBtn.style.display = "inherit";
        playIcon.src = '../image/smallplay.svg';
        clearInterval(iTimer);
      }
    }
  })
  // ========================全屏和退出全屏=============================
  full.addEventListener('click', function () {
    video.style.overflowY = "scroll";
    requestFullScreen(video);
  })
  function requestFullScreen (element) {
    // 判断各种浏览器，找到正确的方法
    var requestMethod = element.requestFullScreen || //W3C
      element.webkitRequestFullScreen || //FireFox
      element.mozRequestFullScreen || //Chrome等
      element.msRequestFullScreen; //IE11
    if (requestMethod) {
      requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { //for Internet Explorer
      var wscript = new ActiveXObject("WScript.Shell");
      if (wscript !== null) {
        wscript.SendKeys("{F11}");
      }
    }
  }
  // ========================进度条=======================
  // 视频总的时间
  var totalTime = parseInt(video.duration);
  allTime.innerHTML = getTime(totalTime);
  // 当前播放时间
  function newTimeF () {
    var newTime = parseInt(video.currentTime);
    //把当前播放的时间实时刷新到界面上
    onewTime.innerHTML = getTime(newTime);
  }
  // 将时间转化为分秒的形式
  function getTime (time) {
    var oHour = ozero(Math.floor(time / 3600, 1000));
    var oMin = ozero(Math.floor(time % 3600 / 60));
    var oSec = ozero(parseInt(time % 60));
    return oHour + ':' + oMin + ':' + oSec;
  }
  function ozero (num) {//补零函数的封装
    return num <= 9 ? '0' + num : '' + num;
  }
  function getLeft (obj) {//获取dom节点距离屏幕左侧的距离
    var iLeft = 0;
    while (obj) {
      iLeft += obj.offsetLeft;
      obj = obj.offsetParent;
    }
    return iLeft;
  }
  //根据鼠标在进度条上的位置，判断视频的播放进度，同时调整控制点的位置
  function pro (ev) {
    var ev = ev || event;
    var disX = dot.offsetLeft + ev.clientX - getLeft(dot);
    if (disX < 0) {
      disX = 0;
    } else if (disX >= progressBarWidth - dotWidth) {
      disX = progressBarWidth - dotWidth;
    }
    dot.style.left = disX + "px";
    progressBarColor.style.width = disX + 1 + "px";
    var scale = disX / (progressBarWidth - dotWidth);
    video.currentTime = scale * video.duration;

  }
  // 单击进度条控制视频的进度
  progressBar[1].addEventListener('click', function (ev) {
    newTimeF()
    pro(ev)
  })
  // 拖动小圆点控制视频的播放进度，同时改变其位置;
  // -----------------Chrome没效果-----------------------
  dot.onmousedown = function (ev) {
    document.onmousemove = function (ev) {
      newTimeF();
      pro(ev);
    }
    document.onmouseup = function () {
      document.onmouseup = document.onmousemove = null;
    }
    return false;
  }
  // ============================音量控制功能=================================
  // 静音功能
  voiceBtn.addEventListener('click', function () {
    if (onOff) {
      this.src = "../image/mute.svg";
      video.volume = 0;
      VolumeBarDot.style.left = 0;
      VolumeBar.style.width = 0;//音量条颜色
      onOff = !onOff;
    } else {
      this.src = "../image/voice.svg";
      video.volume = 1;
      onOff = !onOff;
      VolumeBarDot.style.left = VolumeBarAllWidth - VolumeBarDotWidth + 'px';
      VolumeBar.style.width = VolumeBarAllWidth - VolumeBarDotWidth + 2 + 'px';
    }
  })
  // 拖动小图标控制音量的大小
  VolumeBarDot.onmousedown = function (ev) {
    document.onmousemove = function (ev) {
      var ev = ev || event;
      var disX = VolumeBarDot.offsetLeft + ev.clientX - getLeft(VolumeBarDot);
      if (disX < 0) {
        disX = 0;
      }
      if (disX > VolumeBarAllWidth - VolumeBarDotWidth) {
        disX = VolumeBarAllWidth - VolumeBarDotWidth;
      }
      VolumeBarDot.style.left = disX + 'px';
      if (disX == 0) {
        VolumeBar.style.width = disX + 'px';
      } else {
        VolumeBar.style.width = disX + 1 + 'px';
      }

      var scale = disX / (VolumeBarAllWidth - VolumeBarDotWidth);
      video.volume = scale;
    }
    document.onmouseup = function () {
      document.onmouseup = document.onmousemove = null;
    }
    return false;
  }

  // =======================鼠标滑入的时候显示导航条=========================
  video.addEventListener('mouseenter', function () {
    menuBox.style.display = "inherit";
  })
  videoBox.addEventListener('mouseleave', function () {
    menuBox.style.display = "none";
  })
  // ========================document.getElementById()============================
  function g (id) {
    if (id.substr(0, 1) == '#') {
      return document.getElementById(id.substr(1));
    }
    return document.getElementsByClassName(id);
  }
}
