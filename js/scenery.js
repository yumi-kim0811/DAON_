$(function(){
    //start
    
    var a,b;
    b =  parseInt($('.one ul li').css('width'));
    var bln = true;

    bgChange();
    //클릭하면 사진 바뀌기

        function bgChange(){
            ////right 버튼 클릭하면 사진 왼쪽으로 나오기
            $('.one .right').click(function(){
                    if(bln == true){
                    bln = false;
                    
                    a = parseInt($('.one ul').css('left'));
                    $('.one ul').css({
                        left:a-b
                    });
                    
                    setTimeout(function(){
                        bln = true
                    },600);
                    }
            });

            //left 버튼 클릭하면 사진 왼쪽으로 나오기
            $('.one .left').click(function(){
                if(bln == true){
                    
                    bln = false;
                    a = parseInt($('.one ul').css('left'));
                    $('.one ul').css({
                        left:a+b
                    });
                    setTimeout(function(){
                        bln = true
                    },600);

                }
            });

        };
    
    var c,d;
    d = parseInt($('.two ul li').css('width'));
    bgChange2();
    

        function bgChange2(){ //one 무한슬라이드 구현하기 + 함수 줄이기
            $('.two .right').click(function(){
                if(bln == true){
                    bln = false;
                    c = parseInt($('.two ul').css('left'));
                    $('.two ul').animate({
                        left:c-d
                    },function(){
                        $('.two ul li').eq(0).appendTo($('.two ul'));
                        $('.two ul').css({ left:0 });
                    });

                    setTimeout(function(){
                        bln = true
                    },600);
                }
            });
            $('.two .left').click(function(){
                if(bln == true){
                    bln = false;
                    $('.two ul li').eq(2).prependTo($('.two ul'));
                    $('.two ul').css({ left:-d });
                    c = parseInt($('.two ul').css('left'));
                    $('.two ul').animate({
                        left:c+d
                    },function(){
                        $('.two ul').css({ left:0 });
                    });
                    
                    setTimeout(function(){
                        bln = true
                    },600);
                }

            });
            
        };






    //end

	
});
