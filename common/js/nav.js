// 导航栏
//获取到板子01距离浏览器顶部的距离
$(window).scroll(function () {
  $("#nav").each(function () {
    var navScrollTop = $(window).scrollTop();
    var backgroundHeight = $(".textDescription").outerHeight();
    if (navScrollTop > backgroundHeight) {
      $(".navBox").removeClass('navBox').addClass('newNav');
      $('.navText').removeClass('colorWhite').addClass('colorBlack');
      $('.indexText').removeClass('indexText').addClass('colorYellow');
      $('.imgOne').addClass('disNone');
      $('.imgTwo').removeClass('disNone');
    } else {
      $(".newNav").removeClass('newNav').addClass('navBox');
      $('.navText').removeClass('colorBlack').addClass('colorWhite');
      $('.colorYellow').removeClass('colorYellow').addClass('indexText');
      $('.imgOne').removeClass('disNone');
      $('.imgTwo').addClass('disNone');
    }
  })
})