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