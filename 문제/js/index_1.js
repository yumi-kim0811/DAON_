var lypop = document.querySelector('.ly-pop');
lyPop.style.display = 'none';

//추출할 노드 선택
var gallery = document.querySelector('.gallery');
var li = document.querySelectorAll('.gallery li');
var target;

gallery.addEventListener('click',function(e){
	target = e.target;
	for(;target.nodeName != 'LI';target = target.parentNode);
	
	var imgNode = target.querySelector('img');
	var txtNode = target.querySelector('figcaption');
	
	popImgNode.src = imgNode.src;
	popTxtNode.textContent = txtNode.textContent;
	lyPop.style.display = 'flex';

});


for(var i=0, i<li.length; i++){
	li[i].addEventListener('click',function(){
		//this
	});
}

//li img(이미지 주소값)
//li text(텍스트 값)

//출력할 노드선택
//lyPop
//figure img
//figure figcaption

//prev,next 이벤트 발생
//선택 노드
//ly-pop div a[0] prev
//ly-pop div a[1] next