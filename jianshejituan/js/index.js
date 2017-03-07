$(function(){
    var index = 0;
    // var flag = false;
    var i = 1;
	// 弹出层点击
	$('.line').on('tap',function(e){
        e.preventDefault();
		$('.tanchuceng').animate({left:'0rem'},500);
         $(document).on('touchmove',function (e){
                e.preventDefault();
        });
	});
	$('.ck').on('tap',function(){
		$('.tanchuceng').animate({left:'-7.187rem'},500);
        $(document).unbind('touchmove');
	});
	// 超出文字隐藏
	function hideStr(ele,number){
       var e = ele.text();
       if(e.length>number){
          ele.html(e.substr(0,number)+'....');
       }
	};
	hideStr($('.gstext'),60);
	hideStr($('.newsshow p'),30);
	hideStr($('.qyjs p'),72);
    hideStr($('.dongtailist li p'),40);
    hideStr($('.jztext span'),30);
    hideStr($('.gcp2'),300);

	// 轮播

	    $('.tabImg img').eq(index).fadeIn(500).siblings().filter('img').fadeOut(500);
    function startMove() {
        $('.tabImg img').eq(index).fadeIn(500).siblings().filter('img').fadeOut(500);
        $(".bgindex li").eq(index).addClass('active').siblings().removeClass("active");
        index++;
        if (index == $('.tabImg img').length){
            index = 0;
        }
    };
    timer = setInterval(startMove, 2000);
    $(".tabImg img").mouseover(function() {
        clearInterval(timer);
    })
    $(".tabImg img").mouseout(function() {
        timer = setInterval(startMove, 2000);
    });

    // 控制视频播放
   
    $('.ifplay').on('touchend',function(e){
    	    e.stopPropagation();
    		$('.movie video')[0].play();
            $('.movie video').css('width','9.36rem');
    		$(this).hide();
            $('.videomask').hide();
    		e.preventDefault();  	
    });
    $('.movie video').on('tap',function(){
    	this.pause();
    	$('.ifplay').show();
        $('.videomask').show();
    });
    $('video').on('timeupdate',function(){
        var time = $(this)[0].currentTime;
        if(time>3){
            $(this)[0].pause();
            $('.ifplay').show();
            $('.videomask').show();
        }
    })
    // 点击高亮
    $('.xinwenlist li').on('tap',function(){
        $(this).addClass('xwliang').siblings().removeClass('xwliang');
    });
    // 跳转到详情页
    $('.alink').on('tap',function(){
        window.location.href="../detail.html";
    });
    //跳转到建筑位移
    $('.blink').on('tap',function(){
        window.location.href="../detail1.html";
    })
    //跳转到首页
    $('.return').on('tap',function(){
        window.location.href="../index.html";
    })
    //跳转顶部
    $(document).scroll(function(){
       if($(this).scrollTop()>300){
       $('.gotop').show();
      }else{
        $('.gotop').hide();
      }
    })
    $('.gotop').on('tap',function(){       
        $('body').animate({scrollTop:'0'},300,function(){
            $('.gotop').hide();
        });
        
    })
    // 项目轮播
    
    $('.xmimglist').css('width',2.133*6+'rem');
    $('.xmright').on('tap',function(){
                if (i >= 3) {
                    i = 2;
                }
                $(".xmimglist").animate({
                    left: -i*2.133+'rem'
                });
                i++;
    });
    $('.xmleft').on('tap',function(){
        i--;
        if (i <= 0) {
            i = 0;
        };
        $('.xmimglist').animate({left:-i*2.133+'rem'});
    });
    // 点击跳转相应位置
    $('.tanchuang li').on('tap',function(){
        var index = $(this).index();
        var ele = document.getElementById('model'+index);
        scroll(ele);
        $('.tanchuceng').animate({left:'-7.187rem'},500);
    })
    // 滑动函数
    function scroll(obj){
        var y = parseFloat($('.ck').css('padding-top'));
        var x = obj.offsetTop;
       $('body').animate({scrollTop:x-y}, 500);
    }
})