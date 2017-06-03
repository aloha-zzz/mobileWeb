// var screenWidth=document.body.clientWidth;
// var screenHeight=document.body.clientHeight;
// for(var i=0;i<11;i++){
// 	document.getElementsByClassName('swiper-slide')[i].style.width=screenWidth+'px';
// 	document.getElementsByClassName('swiper-slide')[i].style.height=screenHeight+'px';
// }

var screenWidth=document.body.clientWidth;
var screenHeight=document.body.clientHeight;
if (screenWidth>415) {
    screenWidth=414;
    screenHeight=736;
    $(".swiper-slide").addClass("forwidth");
    $(".swiper-pagination").addClass("sliderforwidth");
}
document.documentElement.style.fontSize = screenWidth/ 6.4 + 'px';

window.onresize=function init() {
	screenWidth=document.body.clientWidth;
	screenHeight=document.body.clientHeight;
    if (screenWidth>415) {
        screenWidth=414;
        screenHeight=736;
        $(".swiper-slide").addClass("forwidth");
    }else{
        $(".swiper-slide").removeClass("forwidth");
    }   
	for(var i=0;i<11;i++){
		document.getElementsByClassName('swiper-slide')[i].style.width=screenWidth+'px';
		document.getElementsByClassName('swiper-slide')[i].style.height=screenHeight+'px';
	}
	document.documentElement.style.fontSize = screenWidth / 6.4 + 'px';
}
window.addEventListener('orientationchange',function(){
    history.go(0);
});
setInterval(function () {
    screenHeight=document.body.clientHeight;
    var height= $("#slide1").offset().top;
    console.log(height);
    if(height==(-screenHeight)){
		$("#playintwo").addClass("fadeInDownShort");
	}
    if((height>(-screenHeight*0))||(height<(-screenHeight*2))){
        $("#playintwo").removeClass("fadeInDownShort");
    }

    if(height==(-screenHeight*2)){
        $("#outphoto").addClass("fadeInDownShort");
        $("#playinthree").addClass("fadeInUpShort");
	}
    if((height>(-screenHeight*1))||(height<(-screenHeight*3))){
        $("#outphoto").removeClass("fadeInDownShort");
        $("#playinthree").removeClass("fadeInUpShort");
    }

    if(height==(-screenHeight*3)){
        $("#playinfour").addClass("fadeInUpShort");
        $("#sun").addClass("tada");
	}
    if((height>(-screenHeight*2))||(height<(-screenHeight*4))){
        $("#playinfour").removeClass("fadeInUpShort");
        $("#sun").removeClass("tada");
    }
    if(height==(-screenHeight*5)){
        $("#playinsix").addClass("fadeInUpShort");
        $("#down").addClass("fadeInDown");
        $("#word").addClass("fadeIn");
    }
    if((height>(-screenHeight*4))||(height<(-screenHeight*6))){
        $("#playinsix").removeClass("fadeInUpShort");
        $("#down").removeClass("fadeInDown");
        $("#word").removeClass("fadeIn");
    }

    if(height==(-screenHeight*10)){
        $("#ninecontent").addClass("fadeInDownShort");
        $("#btcloud").addClass("fadeIn");
    }
    if((height>(-screenHeight*9))||(height<(-screenHeight*11))){
        $("#ninecontent").removeClass("fadeInDownShort");
        $("#btcloud").removeClass("fadeIn");
    }
    if(height==(-screenHeight*11)){
		$("#playineight").addClass("fadeInUpShort");
	}
    if((height>(-screenHeight*10))||(height<(-screenHeight*12))){
        $("#playineight").removeClass("fadeInUpShort");
    }
},400)


$(document).ready(function(){
            autoPlayMusic();
            audioAutoPlay();
        });
        function audioAutoPlay() {
            var audio = document.getElementById('bg-music');
            audio.play();
            document.addEventListener("WeixinJSBridgeReady", function () {
                audio.play();
            }, false);
        }
        // 音乐播放
        function autoPlayMusic() {
            // 自动播放音乐效果，解决浏览器或者APP自动播放问题
            function musicInBrowserHandler() {
                musicPlay(true);
                document.body.removeEventListener('touchstart', musicInBrowserHandler);
            }
            document.body.addEventListener('touchstart', musicInBrowserHandler);
            // 自动播放音乐效果，解决微信自动播放问题
            function musicInWeixinHandler() {
                musicPlay(true);
                document.addEventListener("WeixinJSBridgeReady", function () {
                    musicPlay(true);
                }, false);
                document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
            }
            document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
        }
        function musicPlay(isPlay) {
            var media = document.querySelector('#bg-music');
            if (isPlay && media.paused) {
                media.play();
            }
            if (!isPlay && !media.paused) {
                media.pause();
            }
        }