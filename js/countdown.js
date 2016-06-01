var today = new Date();
var d = today.getDate();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
dayduration = (15-d);
hourduration = (23-h);
minuteduration = (59-m);
secondduration = (59-s);
//倒计时天数
var day = dayduration;
var daytimer;
function changeDay()
{
	if (day > -1) {
		document.getElementById("conday").innerHTML = day;
		timer = setTimeout(function(){changeDay();},86400000);
	}
	else
	{
		clearTimeout(daytimer);
	}
	day--;
}
daytimer = setTimeout(function(){changeDay();},1000);
//倒计时小时
var hour = hourduration;
var hourtimer;
function changeHour()
{
	if (hour > -1) {
		document.getElementById("conhour").innerHTML = hour;
		hourtimer = setTimeout(function(){changeHour();},3600000);
	}
	else
	{
		clearTimeout(hourtimer);
	}
	hour--;
}
hourtimer = setTimeout(function(){changeHour();},1000);
//倒计时分钟
var minute = minuteduration;
var minutetimer;
function changeMinute()
{
	if (minute > -1) {
		document.getElementById("conminute").innerHTML = minute;
		minutetimer = setTimeout(function(){changeMinute();},60000);
	}
	else
	{
		clearTimeout(ninutetimer);
	}
	minute--;
}
minutetimer = setTimeout(function(){changeMinute();},1000);
//倒计时秒
var second = secondduration;
var secondtimer;
function changeSecond()
{
	if (second > -1) {
		document.getElementById("consecond").innerHTML = second;
		secondtimer = setTimeout(function(){changeSecond();},1000);
	}
	else
	{
		clearTimeout(secondtimer);
	}
	second--;
}
secondtimer = setTimeout(function(){changeSecond();},1000);
