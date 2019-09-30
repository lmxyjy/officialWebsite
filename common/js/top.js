
// 滚动条
$(function () {
  // 默认隐藏
  $(".topButton li").hide();
  //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
  $(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        $(".topButton li").fadeIn(1500);
      }
      else {
        $(".topButton li").fadeOut(1500);
      }
    });
    //当点击跳转链接后，回到页面顶部位置
    $("#toTop").click(function () {
      $('body,html').animate({ scrollTop: 0 }, 500);
      return false;
    });
  });
  // 点击出现弹窗
  var opinionBigBox = $('.opinionBigBox');
  // $('#suggestionBtn').on('click', function () {
  //   opinionBigBox.show();
  // })
  $('#x').on('click', function () {
    opinionBigBox.hide();
  })
  $('#send').on('click', function () {
    opinionBigBox.hide();
  })
});