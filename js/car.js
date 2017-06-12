function clickAll(checked)
{
	var allcheckbox=document.getElementsByName("checkItem");
	for(var i=0;i<allcheckbox.length;i++)
	{
		allcheckbox[i].checked=checked;
	}
}
//window.onload(){
function cost(){
	var unit=document.getElementsByClassName("uc").value;
	var num=document.getElementsByClassName("ipt-num").value;
	var sum=document.getElementsByClassName("allcost");
	for(var i=0;i<unit.length;i++)
	{
		s[i]=unit[i]*num[i];
		sum[i].innerHTML=s[i];
	}
}
window.onload=cost;