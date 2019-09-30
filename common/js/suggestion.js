// =========================选择多个文件
function getfilename () {
  var file = $(".replyField").val();
  var pos = file.lastIndexOf("\\");
  var _name = file.substring(pos + 1);
  $('.window').html(_name);
}

//选择文件获取文件名称
function getfilename (el) {
  var _el = el.files;
  var _name = "";
  for (var i = 0; i < _el.length; i++) {
    if (i == _el.length - 1) {
      _name += _el[i].name
    } else {
      _name += _el[i].name + ','
    }
    $('.window').html(_name);
  }
}
