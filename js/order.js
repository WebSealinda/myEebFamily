function setTab(n){  
  
 var tli=document.getElementById("menu").getElementsByTagName("li");  
  
 var mli=document.getElementById("main"+n);
  
 for(i=0;i<tli.length;i++){  
 	if(i==n){
 		tli[i].className="hover";
 		mli.style.display="block";
 	}
 	else {
 		tli[i].className="";
 		mli.style.display="none";
 	}
  
//tli[i].className=i==n?"hover":"";  
//
//mli.style.display=i==n?"block":"none";  
  
 } 