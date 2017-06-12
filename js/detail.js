function changeNum(n) {
	var num = document.getElementById("num").value;
	if(n==0) {
		if(num>1) {
			num=num-1;
		}else {
			num=1;
		}
	}if(n==1) {
		num=num+1;
	}
	document.getElementById("num").innerHTML=num;
}
