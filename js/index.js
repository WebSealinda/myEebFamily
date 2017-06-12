window.onload=function(){
	var oLi=document.getElementById("shop-all");
	var oDiv=document.getElementById("shop-all-second");
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
	
	
	var oWrap=document.getElementById('lunbutu');
	var oPict=document.getElementById('picture');
	var aList=document.getElementById('list').getElementsByTagName('li');
	var index=0;
	var time=null;
	if (time){
		clearInterval(time);
		time=null;
	}
	time=setInterval(autoTurn,2500);
	
//	定义图片切换函数
	function autoTurn() {
		index++;
		if(index>=aList.length){
			index=0;
		}
		changeOptions(index);
	};
	
//	鼠标滑过停止播放
	oWrap.onmouseover=function (){
		clearInterval(time);
	};
	
//	鼠标离开继续播放
	oWrap.onmouseout=function(){
		time=setInterval(autoTurn,2500);
	};
	
//	遍历数字对应图片
	for(var i=0;i<aList.length;i++){
		aList[i].id=i;
		aList[i].onmouseover=function(){
			clearInterval(time);
			changeOptions(this.id);
		};
	}
	function changeOptions(curIndex){
		for (var j=0;j<aList.length;j++){
			aList[j].className='';
			oPict.style.top=0;
		}
		aList[curIndex].className='active';
		oPict.style.top=-curIndex*240+'px';
		index=curIndex;
	};
	
}