////切换语言
$('.language').click(function(){
	$('.hidden').css("display","block")
});
$('.login_cont').click(function(){
	$('.hidden').css("display","none")
});
////切换地址
$('.state').click(function(){
	$('.contury').css("display","block")
});
$('.login_cont').click(function(){
	$('.contury').css("display","none")
});

////登录
//			let oI =$('.txt-id');
//			let oPwd =$('.txt-password');
//			let oLogin = $('.go-login');
//			let oGo = $('.go-reg');
//			
//			//给按钮添加点击事件
//			oLogin.onclick = ()=>{
//				let uId = oUname.val();
//				let uPwd = oPwd.val();
//				let ret1 = /^[a-zA-Z][a-zA-Z0-9_]{6,16}$/;
//				let cookieStr = $getCookie('registors')?$getCookie('registors'):'';
//				let cookieObj = convertcookieStrTocookieObj(cookieStr);
//				if(uId == ''){
//					$('.tishi').css("display","block");
//					$('.hint2').css("display","block");
//				}
//				if(uPwd ==''){
//					$('.tishi').css("display","block");
//					$('.hint3').css("display","block");
//				}
//				if(!ret1.test(uPwd)){
//					$('.tishi').css("display","block");
//					$("hint1").css("display","block");
//				}
//				if(!uId in cookieObj){
//					$('.tishi').css("display","block");
//					$("hint4").css("display","block");
//				}			
//			oGo.onclick = ()=>{
//				location.href = 'registor.html';
//			}
//			function convertcookieStrTocookieObj(str){
//				if(!str){
//					return {};
//				}
//				return JSON.parse(str);
//				
//			}

$('.go-reg').click(function(){
	location.href = 'register.html';
})
			
//展开
$('.zhankai').click(function(){
	$('.zhiFuBao').css("display","inline-block");
	$('.baiDu').css("display","inline-block");
	$('.renRen').css("display","inline-block");
	$('.zhankai').replaceWith("<<收起");
		
})

			

