function startTime() {
  var today = new Date();
  var y = today.getFullYear();
  var o = today.getMonth() + 1;
  var d = today.getDate();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML = "现在时间：" + y + "年" + o  + "月" + d + "日" + h + ":" + m + ":" + s;
  t = setTimeout('startTime()',1000);	

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
  var secondTimer;
  function changeSecond() {
    if (second > -1) {
      document.getElementById("con-second").innerHTML = second;
      secondTimer = setTimeout(function() {changeSecond();},1000);
      }else {
        clearTimeout(secondTimer);
      }
    second--;
  }
  secondTimer = setTimeout(function() {changeSecond();},1000);
}

function checkTime(i) {
  if (i<10) {
    i = "0" + i;
  }
  return i;
}
