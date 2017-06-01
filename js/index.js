// var screenWidth=document.body.clientWidth;
// var screenHeight=document.body.clientHeight;
// for(var i=0;i<11;i++){
// 	document.getElementsByClassName('swiper-slide')[i].style.width=screenWidth+'px';
// 	document.getElementsByClassName('swiper-slide')[i].style.height=screenHeight+'px';
// }
document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + 'px';
var screenWidth=document.body.clientWidth;
var screenHeight=document.body.clientHeight;
window.onresize=function init() {
	screenWidth=document.body.clientWidth;
	screenHeight=document.body.clientHeight;
	for(var i=0;i<11;i++){
		document.getElementsByClassName('swiper-slide')[i].style.width=screenWidth+'px';
		document.getElementsByClassName('swiper-slide')[i].style.height=screenHeight+'px';
	}
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + 'px';
}

setInterval(function () {
    var height= $("#slide1").offset().top;
    if(height==0){

	}else if(height==(-screenHeight)){
		$("#playintwo").addClass("fadeInDownShort");
	}else if(height==(-screenHeight*2)){
        $("#playinthree").addClass("fadeInUpShort");
	}else if(height==(-screenHeight*3)){
        $("#playinfour").addClass("fadeInUpShort");
        $("#sun").addClass("tada");
	}else if(height==(-screenHeight*5)){
        $("#playinsix").addClass("fadeInUpShort");
        $("#down").addClass("fadeInDown");
        $("#word").addClass("fadeIn");
    }else if(height==(-screenHeight*10)){
		$("#playineight").addClass("growIn");
	}
},500)
