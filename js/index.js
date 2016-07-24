function formatTime(date) {
  var y = date.getFullYear();
  var o = date.getMonth() + 1;
  var d = date.getDate();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  m = fixTime(m);
  s = fixTime(s);

  var formatedDate = y + "年" + o  + "月" + d + "日 " + h + ":" + m + ":" + s;
  return formatedDate;
}

function countDownTime() {
  var today = new Date();
 
  // add a zero in front of numbers<10
  
  document.getElementById('current-time').innerHTML = "现在时间：" + formatTime(today);

  var deadline = new Date("00:00:00 1/28/2017");

  var duration = deadline.getTime() - today.getTime();
  // 计算出相差天数
  var dayDuration = Math.floor(duration / 1000 / 60 / 60 / 24);
  // 计算出小时数
  var leave1 = duration % (1000 * 60 * 60 * 24);// 计算天数后剩余的毫秒数
  var hourDuration = Math.floor(leave1 / 1000 / 60 / 60);
  // 计算相差分钟数
  var leave2 = leave1 % (1000 * 60 * 60)// 计算小时数后剩余的毫秒数
  var minuteDuration = Math.floor(leave2 / 1000 / 60);
  // 计算相差秒数
  var leave3 = leave2 % (1000 * 60);// 计算分钟后剩余秒数
  var secondDuration = Math.floor(leave3 / 1000);

  // 倒计时天数
  var day = dayDuration;
  document.getElementById("con-day").innerHTML = day;
  // 倒计时小时
  var hour = hourDuration;
  document.getElementById("con-hour").innerHTML = hour;
  // 倒计时分钟
  var minute = minuteDuration;
  document.getElementById("con-minute").innerHTML = minute;
  // 倒计时秒
  var second = secondDuration;
  document.getElementById("con-second").innerHTML = second;

  setTimeout(countDownTime, 1000);
}

function fixTime(i) {
  if (i<10) {
    i = "0" + i;
  }
  return i;
}
