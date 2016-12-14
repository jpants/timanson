$(function(){
	if (window.location.hash === '#bath') { // changes active classes when coming from bio page
		$('.tab-panel').eq(0).removeClass('active'); // Make panel inactive
		$('.tab-list li').eq(0).removeClass('active'); // Make tab inactive
		$('.tab-panel').eq(1).addClass('active'); // Make new panel active
		$('.tab-list li').eq(1).addClass('active'); // Make new tab active
	}
	else if (window.location.hash === '#decks') {
		$('.tab-panel').eq(0).removeClass('active'); // Make panel inactive
		$('.tab-list li').eq(0).removeClass('active'); // Make tab inactive
		$('.tab-panel').eq(2).addClass('active'); // Make new panel active
		$('.tab-list li').eq(2).addClass('active'); // Make new tab active
	}
	else if (window.location.hash === '#adAccess') {
		$('.tab-panel').eq(0).removeClass('active'); // Make panel inactive
		$('.tab-list li').eq(0).removeClass('active'); // Make tab inactive
		$('.tab-panel').eq(4).addClass('active'); // Make new panel active
		$('.tab-list li').eq(4).addClass('active'); // Make new tab active
	};
	$('.tab-list').each(function(){ // Find lists of tabs
		var $this = $(this); // Store this list
		var $tab = $this.find('li.active'); // Get the active list item
		var $link = $tab.find('a'); // Get link from active tab
		var $panel = $($link.attr('href')); // Get active panel
		$this.on('click', '.tab-control', function(e) { // When u click on a tab
			e.preventDefault(); // Prevent link behavior
			var $link = $(this); // Store the current link
			id = this.hash; // Get hash of clicked tab
			if (id && !$link.is('.active')) { // If not currently active
				$panel.removeClass('active'); // Make panel inactive
				$tab.removeClass('active'); // Make tab inactive
				$panel = $(id).addClass('active'); // Make new panel active
				$tab = $link.parent().addClass('active'); // Make new tab active
			}
		});
	});
});