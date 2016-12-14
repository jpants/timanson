$(function(){

	$('.slider').each(function(){ // slide show function
		var $this=$(this);
		var $group=$this.find('.slide-group');
		var $slides=$this.find('.slide');
		var buttonArray=[];
		var btnIconArray=document.getElementsByClassName('btnLetters');
		var currentIndex=0;
		var timeout;
		var status='running';

		function move(newIndex) {
			if($group.is(':animated')||currentIndex===newIndex){
				return;
			}		
			newSlideTimer=setTimeout(function(){ // fades new slides in
				$slides.eq(newIndex).css({ left: 0})
					.fadeIn(4000); 
			}, 6000);
			currentSlideTimer=setTimeout(function(){ // fades current slides out
				$slides.eq(currentIndex)
					.fadeOut(4000);
			}, 6000);
			$group.animate({ // moves whole slide group and sets appropriate classes and updates currentIndex
				left: '-10%'
				}, 10000,	"easeInOutSine", function(){
					$slides.eq(newIndex).css({left: '-8.4%'});
					$group.css({left: 0});
					buttonArray[currentIndex].removeClass('active');
					buttonArray[currentIndex].addClass('inactive');
					buttonArray[newIndex].addClass('active');
					buttonArray[newIndex].removeClass('inactive');
					$('div.btnWords').eq(currentIndex).removeClass('unhid');
					$('div.btnWords').eq(currentIndex).addClass('hid');
					$('div.btnWords').eq(newIndex).addClass('unhid');
					$('div.btnWords').eq(newIndex).removeClass('hid');
					currentIndex=newIndex;
					advance();
				}
			);

			$('.slide-btn, .btnLetters').click(function(event){ // handles icons
				var targetIndex=$(event.target).index();
				if(status=='running'){ // stops the slide show
					$group.stop();
					clearTimeout(newSlideTimer);
					clearTimeout(currentSlideTimer);
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
						buttonArray[currentIndex].removeClass('active');
						buttonArray[targetIndex].addClass('active');
						$('.btnWords').eq(currentIndex).removeClass('unhid');
						$('.btnWords').eq(currentIndex).addClass('hid');
						$('.btnWords').eq(targetIndex).removeClass('hid');
						$('.btnWords').eq(targetIndex).addClass('unhid');
						$('.btnLetters').eq(targetIndex).css({height: '35px', width: '35px', margin: '0px'});
						$('.slide-btn').eq(targetIndex).removeClass('hov');
						$('.slide-btn').eq(targetIndex).addClass('inactive');
						$('.slide-btn').eq(currentIndex).addClass('inactive');
						currentIndex=targetIndex;
						return;
					}
					else {
						$slides.eq(targetIndex).fadeIn(2000);
						$slides.eq(currentIndex).fadeOut(2000);
						$slides.eq(currentIndex+1).fadeOut(2000);
						status='stopped';
						buttonArray[currentIndex].removeClass('active');
						buttonArray[targetIndex].addClass('active');
						$('.btnWords').eq(currentIndex).removeClass('unhid');
						$('.btnWords').eq(currentIndex).addClass('hid');
						$('.btnWords').eq(targetIndex).removeClass('hid');
						$('.btnWords').eq(targetIndex).addClass('unhid');
					$('.btnLetters').eq(targetIndex).css({height: '35px', width: '35px', margin: '0px'});
					$('.slide-btn').eq(targetIndex).removeClass('hov');
					$('.slide-btn').eq(targetIndex).addClass('inactive');
						$('.slide-btn').eq(currentIndex).addClass('inactive');
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
						buttonArray[currentIndex].removeClass('active');
						buttonArray[targetIndex].addClass('active');
						$('.btnWords').eq(currentIndex).removeClass('unhid');
						$('.btnWords').eq(currentIndex).addClass('hid');
						$('.btnWords').eq(targetIndex).removeClass('hid');
						$('.btnWords').eq(targetIndex).addClass('unhid');
						$('.btnLetters').eq(targetIndex).css({height: '35px', width: '35px', margin: '0px'});
						$('.slide-btn').eq(targetIndex).removeClass('hov');
						$('.slide-btn').eq(targetIndex).addClass('inactive');
						$('.slide-btn').eq(currentIndex).addClass('inactive');
						currentIndex=targetIndex;
						return;
					}
				}
			});
		}

		function advance(){ // sets value for newIndex
				if (currentIndex<($slides.length-1)) {
					move(currentIndex+1);
				}
				else {
					move(0);
				}
		};

		$.each($slides, function(index){ // creates icons
			var $button=$('<div class="slide-btn inactive"></div>');
			if (index===currentIndex) {
				$button.addClass('active');
				$button.removeClass('inactive');
			}
			$button.appendTo('.slide-buttons');
			buttonArray.push($button);
		});

		advance(); // creates recurring loop

		$('.btnLetters').hover( // handles icons on hover
			function(event){
				var targetIndex=$(event.target).index();
				if(buttonArray[targetIndex].is('.active')){
					return;
				}
				$('.btnLetters').eq(targetIndex).css({height: '45px', width: '45px', margin: '-5px'});
				$('.slide-btn').eq(targetIndex).removeClass('inactive');
				$('.slide-btn').eq(targetIndex).addClass('hov');
			},
			function(){
				var targetIndex=$(event.target).index();
				$('.btnLetters').eq(targetIndex).css({height: '35px', width: '35px', margin: '0px'});
				$('.slide-btn').eq(targetIndex).removeClass('hov');
				$('.slide-btn').eq(targetIndex).addClass('inactive');
			}
		);

	});
		
});


