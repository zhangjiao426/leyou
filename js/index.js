//二维码点击事件
$('.offQR').click(function(){
	$('.QR').remove();
	$('.s-car').append("购物车").css("width","166px");
});

//按钮
$('.txt').blur("placeholder","");

//爆款推荐滑过
$('.minu-left1').mouseenter(function(){
	$('.minu-left1').css("background-color","#2884c7");
	$('.minu-left1 .icon-iconfontjiantou3').css("font-size","20px");
	$('.minu-right1').css("display","block");
});
$('.minu-left1').mouseleave(function(){
	$('.minu-right1').mouseenter(function(){
		$('.minu-left1').css("background-color","#2884c7");
		$('.minu-left1 .icon-iconfontjiantou3').css("font-size","20px");
		$('.minu-right1').css("display","block");
	});
	$('.minu-right1').mouseleave(function(){
		$('.minu-left1').css("background-color","#000000");
		$('.minu-left1 .icon-iconfontjiantou3').css("font-size","12px");
		$('.minu-right1').css("display","none");	
	});
	$('.minu-left1').css("background-color","#000000");
	$('.minu-left1 .icon-iconfontjiantou3').css("font-size","12px");
	$('.minu-right1').css("display","none");
});
//屏幕尺寸移入移出
$('.minu-left2').mouseenter(function(){
	$('.minu-left2').css("background-color","#2884c7");
	$('.minu-left2 .icon-iconfontjiantou3').css("font-size","20px");
	$('.minu-right2').css("display","block");
});
$('.minu-left2').mouseleave(function(){
	//右侧盒子移入移出事件
	$('.minu-right2').mouseenter(function(){
		$('.minu-left2').css("background-color","#2884c7");
		$('.minu-left2 .icon-iconfontjiantou3').css("font-size","20px");
		$('.minu-right2').css("display","block");
	});
	$('.minu-right2').mouseleave(function(){
		$('.minu-left2').css("background-color","#000000");
		$('.minu-left2 .icon-iconfontjiantou3').css("font-size","12px");
		$('.minu-right2').css("display","none");
	});
	$('.minu-left2').css("background-color","#000000");
	$('.minu-left2 .icon-iconfontjiantou3').css("font-size","12px");
	$('.minu-right2').css("display","none");
});
//适用场景
$('.minu-left3').mouseenter(function(){
	$('.minu-left3').css("background-color","#2884c7");
	$('.minu-left3 .icon-iconfontjiantou3').css("font-size","20px");
	$('.minu-right3').css("display","block");
});
$('.minu-left3').mouseleave(function(){
	//右侧盒子移入移出事件
	$('.minu-right3').mouseenter(function(){
		$('.minu-left3').css("background-color","#2884c7");
		$('.minu-left3 .icon-iconfontjiantou3').css("font-size","20px");
		$('.minu-right3').css("display","block");
	});
	$('.minu-right3').mouseleave(function(){
		$('.minu-left3').css("background-color","#000000");
		$('.minu-left3 .icon-iconfontjiantou3').css("font-size","12px");
		$('.minu-right3').css("display","none");	
	});
	$('.minu-left3').css("background-color","#000000");
	$('.minu-left3 .icon-iconfontjiantou3').css("font-size","12px");
	$('.minu-right3').css("display","none");
});
//观看距离
$('.minu-left4').mouseenter(function(){
	$('.minu-left4').css("background-color","#2884c7");
	$('.minu-left4 .icon-iconfontjiantou3').css("font-size","20px");
	$('.minu-right4').css("display","block");
});
$('.minu-left4').mouseleave(function(){
	//右侧盒子移入移出事件
	$('.minu-right4').mouseenter(function(){
		$('.minu-left4').css("background-color","#2884c7");
		$('.minu-left4 .icon-iconfontjiantou3').css("font-size","20px");
		$('.minu-right4').css("display","block");
	});
	$('.minu-right4').mouseleave(function(){
		$('.minu-left4').css("background-color","#000000");
		$('.minu-left4 .icon-iconfontjiantou3').css("font-size","12px");
		$('.minu-right4').css("display","none");	
	});
	$('.minu-left4').css("background-color","#000000");
	$('.minu-left4 .icon-iconfontjiantou3').css("font-size","12px");
	$('.minu-right4').css("display","none");
});
//智能配件移入移出
$('.minu-left5').mouseenter(function(){
	$('.minu-left5').css("background-color","#2884c7");
	$('.minu-left5 .icon-iconfontjiantou3').css("font-size","20px");
	$('.minu-right5').css("display","block");
});
$('.minu-left5').mouseleave(function(){
	//右侧盒子移入移出事件
	$('.minu-right5').mouseenter(function(){
		$('.minu-left5').css("background-color","#2884c7");
		$('.minu-left5 .icon-iconfontjiantou3').css("font-size","20px");
		$('.minu-right5').css("display","block");
	});
	$('.minu-right5').mouseleave(function(){
		$('.minu-left5').css("background-color","#000000");
		$('.minu-left5 .icon-iconfontjiantou3').css("font-size","12px");
		$('.minu-right5').css("display","none");	
	});
	$('.minu-left5').css("background-color","#000000");
	$('.minu-left5 .icon-iconfontjiantou3').css("font-size","12px");
	$('.minu-right5').css("display","none");
});
//精选配件移入移出
$('.minu-left6').mouseenter(function(){
	$('.minu-left6').css("background-color","#2884c7");
	$('.minu-left6 .icon-iconfontjiantou3').css("font-size","20px");
	$('.minu-right6').css("display","block");
})
$('.minu-left6').mouseleave(function(){
	//右侧盒子移入移出事件
	$('.minu-right6').mouseenter(function(){
		$('.minu-left6').css("background-color","#2884c7");
		$('.minu-left6 .icon-iconfontjiantou3').css("font-size","20px");
		$('.minu-right6').css("display","block");
	});
	$('.minu-right6').mouseleave(function(){
		$('.minu-left6').css("background-color","#000000");
		$('.minu-left6 .icon-iconfontjiantou3').css("font-size","12px");
		$('.minu-right6').css("display","none");	
	});
	$('.minu-left6').css("background-color","#000000");
	$('.minu-left6 .icon-iconfontjiantou3').css("font-size","12px");
	$('.minu-right6').css("display","none");
});


//回到顶点按钮事件
   $(document).ready(function(){
//      $(".btn-bottom-bg").hide()//隐藏按钮
        $(function(){
            $(window).scroll(function(){
                if($(this).scrollTop()>1){//$(window).height()){//当window的scrolltop距离大于1时，按钮淡出，反之淡入
                    $(".btn-bottom-bg").fadeIn(300);
                } 
                else {
                    $(".btn-bottom-bg").fadeOut(300);
                }
            });
        });
    
// 给.btn-bottom-bg按钮一个点击事件
        $(".btn-bottom-bg").click(function(){
            $("html,body").animate({scrollTop:0},100);//点击go to top按钮时，以800的速度回到顶部，这里的800可以根据你的需求修改
            return false;
        });
  });
  
//跳转
	$('.btn-login').click(function(){
		location.href='login.html';
	});
	$('.btn-register').click(function(){
		location.href='registor.html';
	});
	
