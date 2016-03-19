window.onload=init;
var i=0;
var timer;
var obj;
function init(){
		obj=document.getElementById("imageslide");
		scrollWidth=obj.clientWidth;
		var str=obj.innerHTML;
		obj.innerHTML+=str;
		autoStart();
}
function autoStart(){
	timer=window.setInterval(scrol,100);
}
function scrol(){
	if(i>obj.clientWidth){
		i=0;
	}
	i+=3;
	obj.scrollLeft=i;
}
function halt(){
	window.clearInterval(timer);
}
function Continue(){
	autoStart();
}
