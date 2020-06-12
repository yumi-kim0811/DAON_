
$(function(){
	var idx = 0;
	$('.ly-pop').hide();
	
	$('.gallery li').on('click',function(){
		idx = $(this).index();
		var img = $(this).find('img').attr('src');
		var txt = $(this).find('figcaption').text();

		$('.ly-pop figure p img').attr('src',img);
		$('.ly-pop figcaption').text(txt);
		$('.ly-pop').css({display:'flex'});
	});

	function imgChange(){
		var imgSrc = $('.gallery li').eq(idx).find('img').attr('src');
		var txt = $('.gallery li').eq(idx).find('figcaption').text();
		
		$('.ly-pop figure p img').attr('src',imgSrc);
		$('.ly-pop figcaption').text(txt);
  
//		//next
//			if(idx == $('ly-pop figure').length-1){
//				$('.ly-pop div a:last').show();	
//			}
//			//prev
//			if(idx <= 0){
//				$('.ly-pop div a:first').show();
//			}
	}
	//imgChange();

	$('.ly-pop div a').eq(0).on('click',function(){
			//prev
			if(idx <= 0){return}
			--idx;
			imgChange();
	});

	$('.ly-pop div a').eq(1).on('click',function(){
			//next
			if(idx == $('.gallery li').length-1){return}
			++idx;
			imgChange();
	});
	
	$('.ly-pop .aa').on('click',function(){
		   $('.ly-pop').hide();
    });
	

});
