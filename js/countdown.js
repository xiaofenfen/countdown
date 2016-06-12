var today = new Date();
var objectTime = new Date("00:00:00 6/15/2016");
var duration = objectTime.getTime() - today.getTime();
var dayduration = Math.floor(duration / 1000 / 60 / 60 / 24);
var hourduration = Math.floor(duration / 1000 /60 / 60) - dayduration * 24;
var minuteduration = Math.floor(duration / 1000 /60) - dayduration * 24 * 60 - hourduration * 60;
var secondduration = Math.floor(duration / 1000) - dayduration * 24 * 60 *60 - hourduration * 60 * 60 - minuteduration * 60;
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
