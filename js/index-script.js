$(function () {
    var i=0;
    //배경 바뀌기 + 보여지는 이미지의 순서에 따라 버튼에 불켜기
    var btnInterval;
    function btnChange(){
        btnInterval = setInterval(function(){
            if(i==4){
                i=0; //i값 초기화
                $('.daon-bg').find('img').eq(4).fadeOut(1500); //이전 이미지 사라지기
               
                $('.play').find('button').eq(4).css({
                opacity: 0.5
                }); //마지막 버튼 불 off
                $('.play').find('button').eq(0).css({
                opacity: 1
                }); //첫번째 버튼 불 on

                setTimeout(function(){
                    $('.daon-bg').find('img').css({
                        display:'block'
                    }) //img가 전부 display none처리 된 것을 다시 block처리(재시작)
                },1600) //이미지 사라진 후에 실행
            }
            else{
                $('.daon-bg').find('img').eq(i).fadeOut(1500); //이전 이미지 사라지기
                
                $('.play').find('button').eq(i).css({
                opacity: 0.5
                }); //이전 버튼 불 off
                $('.play').find('button').eq(i+1).css({
                opacity: 1
                }); //다음 버튼 불 on

                i++;
            }
        },5000); //5초마다 반복 실행
    };
    btnChange();
    
    //버튼 클릭하면 그 이미지 순서에서 멈추기
    function btnStop(){
        var bln = true;

        $('button').click(function(){
            var num = $(this).attr('class'); //내가 클릭한 버튼의 class명
            var index = parseInt(num.charAt(num.length-1)); //클릭한 버튼의 class명에서 index값 추출

            if(bln == true){  //연속클릭 방지를 위한 if문
            bln = false; //재클릭 불가능하도록 bln값 변경

            clearInterval(btnInterval); //btnChange함수 안에 있는 setInterval 끄기
            
            //현재 보고 있는 이미지 복사해서 맨 앞으로 붙여넣기
            $('.daon-bg').find('img').eq(i).clone().prependTo($('.daon-bg'));
            
            //복사해온 이미지를 맨 위에 있도록 z-index값 수정
            $('.daon-bg').find('img').eq(0).css({
                zIndex:8
            })

            setTimeout(function(){
                $('.daon-bg').find('img').css({
                    display:'block'
                }); //display none 처리 된 기존 이미지들을 block으로 바꾸기
                for(var j=1; j<index+1; j++){
                    $('.daon-bg').find('img').eq(j).css({
                        display:'none'
                    });
                } //맨 앞의 이미지(clone한 이미지)제외, 클릭한 이미지 이전까지의 이미지는 모두 display none처리
            },300)

            $('.daon-bg').find('img').eq(0).fadeOut(1500); //clone한 이미지를 찾아서 fadeOut하기

            setTimeout(function(){
                $('.daon-bg').find('img').eq(0).remove(); //(clone된)fadeOut한 이미지를 html안에서 삭제
                bln = true; //재클릭 가능하도록 bln값 변경
            },1500); 
            
            $('.play').find('button').eq(i).css({
                opacity: 0.5
            }); //클릭 전 이미지에 해당하는 버튼 off
            $('.play').find('button').eq(index).css({
                opacity: 1
            }); //클릭 한 이미지에 해당하는 버튼 on

            i = index; //클릭한 이미지의 i값을 index로 변경
            btnChange(); //꺼놨던 btnChange 함수 다시 on
            }
        })
    }
    btnStop();
})
