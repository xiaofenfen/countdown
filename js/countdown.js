//计算天数
var t1 = new Date();
var t2 = new Date("2016/6/15 00:00:00");
var a = (t2.getTime() - t1.getTime());
a = (a/1000/60/60);

//倒计时天数
var day = a;
var timer;
function changed()
{
	day--;
	if (day > -1) {
		document.getElementById("conday").innerHTML = day;
		timer = setTimeout('changed()',1000);
	}
	else
	{
		clearTimeout(timer);
	}
}
timer = setTimeout('changed()',1000);

//倒计时小时
var hour = 100;
var timer;
function changeh()
{
	hour--;
	if (hour > -1) {
		document.getElementById("conhour").innerHTML = hour;
		timer = setTimeout('changeh()',1000);
	}
	else
	{
		clearTimeout(timer);
	}
}
timer = setTimeout('changeh()',1000);

//倒计时分钟
var minute = 100;
var timer;
function changem()
{
	minute--;
	if (minute > -1) {
		document.getElementById("conminute").innerHTML = minute;
		timer = setTimeout('changem()',1000);
	}
	else
	{
		clearTimeout(timer);
	}
}
timer = setTimeout('changem()',1000);

//倒计时秒
var second = 100;
var timer;
function changes()
{
	second--;
	if (second > -1) {
		document.getElementById("consecond").innerHTML = second;
		timer = setTimeout('changes()',1000);
	}
	else
	{
		clearTimeout(timer);
	}
}
timer = setTimeout('changes()',1000);