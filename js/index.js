var screenWidth=document.body.clientWidth;
var screenHeight=document.body.clientHeight;
for(var i=0;i<11;i++){
	document.getElementsByClassName('swiper-slide')[i].style.width=screenWidth+'px';
	document.getElementsByClassName('swiper-slide')[i].style.height=screenHeight+'px';
}
document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + 'px';
window.onresize=function init() {
	var screenWidth=document.body.clientWidth;
var screenHeight=document.body.clientHeight;
for(var i=0;i<11;i++){
	document.getElementsByClassName('swiper-slide')[i].style.width=screenWidth+'px';
	document.getElementsByClassName('swiper-slide')[i].style.height=screenHeight+'px';
}
document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + 'px';
}