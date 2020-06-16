$(function () {
   
    var bgInterval;
    var btnInterval;
    
    //배경 바뀌기
    function bgChange(){
        bgInterval = setInterval(function(){
            $('.daon-bg').find('img').eq(0).fadeOut(500);
                setTimeout(function(){
                $('.daon-bg').find('img').eq(0).css({
                    display:'block'
                });
                $('.daon-bg').append($('.daon-bg').find('img').eq(0));
                },700)
        },5000);
    }
    
    bgChange();
    
    var i=0;
    //보여지는 이미지의 순서에 따라 버튼에 불켜기
    function btnChange(){
        btnInterval = setInterval(function(){
            if(i==4){
                i=0;
                $('.play').find('button').eq(4).css({
                opacity: 0.5
                });
                $('.play').find('button').eq(0).css({
                opacity: 1
                });
            }
            else{
                $('.play').find('button').eq(i).css({
                opacity: 0.5
                });
                $('.play').find('button').eq(i+1).css({
                opacity: 1
                });
                i++;
            }
        },5000);
    };
    
    btnChange();
    
    var bln = true;
    
    //play 버튼 stop으로 바꾸고 멈추기, 실행하길
    $('.playstop').click(function(){
        if(bln == true){
       clearInterval(bgInterval); 
       clearInterval(btnInterval); 
        $('.playstop').find('img').attr('src','img/icon_stop.png');
            bln=false;
        } else{
            bgChange();
            btnChange();
             $('.playstop').find('img').attr('src','img/play.png');
            bln=true;
        }
    });
    
    
    //버튼 클릭하면 그 이미지 순서에서 멈추기
    function btnStop(){
        
            $('button').click(function(){
                if(bln == true){
                clearInterval(bgInterval);
                clearInterval(btnInterval);
                $('button').find('.daon-bg')
                }

            })
    }
})


