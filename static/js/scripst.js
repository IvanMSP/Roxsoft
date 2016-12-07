function makeSticky(){
	var myWindow = $(window),
		myHeader = $(".navbar");

		myWindow.scroll(function(){
				if (myWindow.scrollTop()==0){
						myHeader.removeClass("visibles");
					}else{
						myHeader.addClass("visibles");
					}
				});
		}

		$(function(){
			makeSticky();
		});