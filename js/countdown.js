var second = 100;
var timer;
function change()
{
	second--;
	if (second > -1) {
		document.getElementById("time").innerHTML = second;
		timer = setTimeout('change()',1000);
	}
	else
	{
		clearTimeout(timer);
	}
}
timer = setTimeout('change()',1000);