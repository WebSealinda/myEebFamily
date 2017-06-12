window.onload =function(){
    var oLi = document.getElementById("shop-all");;
	var oDiv = document.getElementById("shop-all-second");
	var oPrudlistCarOne=document.getElementById('prudlistCarOne');
	var oPrudlistCarTwo=document.getElementById('prudlistCarTwo');
	var prudlistCar=document.getElementById('prudlistCar');
	var timer=null;
	oLi.onmouseover =oDiv.onmouseover= function() {
		clearTimeout(timer);
		oDiv.style.display = 'flex';
		oLi.style.display='inline-block';
	};
	oLi.onmouseout=oDiv.onmouseout = function() {
		timer=setTimeout(function(){
			oDiv.style.display = 'none';
		},500);
		
	};
	prudlistCar.onmouseover=function(){
		oPrudlistCarOne.style.display='none';
		oPrudlistCarTwo.style.display='block';
	};
	prudlistCar.onmouseout=function(){
		oPrudlistCarOne.style.display='block';
		oPrudlistCarTwo.style.display='none';		
	};
};