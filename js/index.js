function startTime(){
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
			document.getElementById('txt').innerHTML = "现在时间：" + y + "年" + o  + "月" + d + "日" + h + ":" + m + ":" + s ;
			t = setTimeout('startTime()',1000);
		}
		function checkTime(i){
		if (i<10) {
			i = "0" + i}
	  return i;
	  }



