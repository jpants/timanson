$(function(){

	$('.slider').each(function(){ // slide show function
		var $this=$(this);
		var $group=$this.find('.slideGroup');
		var $slides=$this.find('.slide');
		var currentIndex=0;
		var status='running';

		function advance(){ // sets value for newIndex
				if (currentIndex<($slides.length-1)) {
					move(currentIndex+1);
				}
				else {
					move(0);
				}
		};

		function move(newIndex) {
			if($group.is(':animated')||currentIndex===newIndex){
				return;
			}		
			newSlideTimer=setTimeout(function(){ // fades new slides in
				$slides.eq(newIndex).css({ left: 0})
					.fadeIn(4000);
				$slides.eq(currentIndex)
					.fadeOut(4000);
				$('div.labels').eq(currentIndex).removeClass('vis');
				$('div.labels').eq(newIndex).addClass('vis');
				$('.icons').eq(currentIndex).removeClass('hot');
				$('.icons').eq(newIndex).addClass('hot');
			}, 6000);
			$group.animate({ // moves whole slide group and sets appropriate classes and updates currentIndex
				left: '-10%'
				}, 10000,	"easeInOutSine", function(){
					$slides.eq(newIndex).css({left: '-8.4%'});
					$group.css({left: 0});
					currentIndex=newIndex;
					advance();
				}
			);

			$('.icons').click(function(event){ // handles icons
				var targetIndex=$(event.target).index();
				if(status=='running'){ // stops the slide show
					$group.stop();
					clearTimeout(newSlideTimer);
					$slides.stop();
					if(currentIndex==targetIndex){
						$slides.stop();
						$slides.eq(targetIndex).fadeIn(2000);
						$slides.eq(currentIndex+1).fadeOut(2000);
						status='stopped';
						currentIndex=targetIndex;
						return;
					}
					else if(targetIndex==currentIndex+1){
						$slides.eq(targetIndex).fadeIn(2000);
						$slides.eq(currentIndex).fadeOut(2000);
						status='stopped';
						$('.labels').eq(currentIndex).removeClass('vis');
						$('.labels').eq(targetIndex).addClass('vis');
						$('.icons').eq(currentIndex).removeClass('hot');
						$('.icons').eq(targetIndex).addClass('hot');
						currentIndex=targetIndex;
						return;
					}
					else {
						$slides.eq(targetIndex).fadeIn(2000);
						$slides.eq(currentIndex).fadeOut(2000);
						$slides.eq(currentIndex+1).fadeOut(2000);
						status='stopped';
						$('.labels').eq(currentIndex).removeClass('vis');
						$('.labels').eq(currentIndex+1).removeClass('vis');
						$('.labels').eq(targetIndex).addClass('vis');
						$('.icons').eq(currentIndex).removeClass('hot');
						$('.icons').eq(currentIndex+1).removeClass('hot');
						$('.icons').eq(targetIndex).addClass('hot');
						currentIndex=targetIndex;
						return;
					}
				}
				else {
					if(currentIndex==targetIndex){
						return;
					}
					else {
						$slides.eq(targetIndex).fadeIn(2000);
						$slides.eq(currentIndex).fadeOut(2000);
						$('.labels').eq(currentIndex).removeClass('vis');
						$('.labels').eq(targetIndex).addClass('vis');
						$('.icons').eq(currentIndex).removeClass('hot');
						$('.icons').eq(targetIndex).addClass('hot');
						currentIndex=targetIndex;
						return;
					}
				}
			});
		}

		advance(); // creates recurring loop

	});

	indexLoad=setTimeout(function(){
		$('#mainIndex').css({opacity: 1});
	}, 2000);

	indexLoad2=setTimeout(function(){
		$('#estimateButton').css({opacity: 1});
	}, 5000);

});


