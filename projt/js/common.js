$(function() {

	// top-menu-btn
	$('.menu-btn').on('click', function() {
		$(this).toggleClass('menu-btn_active');
		$('.header').toggleClass('menu-nav_active');
		$('.hide-menu').toggle();
	});
	$('.hide-menu').on('click', function() {
		$('.menu-btn').toggleClass('menu-btn_active');
		$('.header').toggleClass('menu-nav_active');
		$(this).toggle();
	});


	// Initiate Pretty Dropdowns
	$('#spell').prettyDropdown({
		afterLoad: function() {
			console.log('Spells are ready!');
		}
	});


	// accordion
	$( "#accordion" ).accordion({
		collapsible: true,
		// clearStyle: true,
		active: false,
		beforeActivate: function(event, ui) {
		 // The accordion believes a panel is being opened
		 if (ui.newHeader[0]) {
			var currHeader  = ui.newHeader;
			var currContent = currHeader.next('.ui-accordion-content');
		 // The accordion believes a panel is being closed
		} else {
			var currHeader  = ui.oldHeader;
			var currContent = currHeader.next('.ui-accordion-content');
		}
		 // Since we've changed the default behavior, this detects the actual status
		 var isPanelSelected = currHeader.attr('aria-selected') == 'true';

		 // Toggle the panel header
		 currHeader.toggleClass('ui-corner-all',isPanelSelected).toggleClass('accordion-header-active ui-state-active ui-corner-top',!isPanelSelected).attr('aria-selected',((!isPanelSelected).toString()));

		// Toggle the panel icon
		currHeader.children('.ui-icon').toggleClass('ui-icon-triangle-1-e',isPanelSelected).toggleClass('ui-icon-triangle-1-s',!isPanelSelected);

		 // Toggle the panel content
		 currContent.toggleClass('accordion-content-active',!isPanelSelected)    
		 if (isPanelSelected) { currContent.slideUp(); }  else { currContent.slideDown(); }

		return false; // Cancels the default action
		}	
	});


	// tooltip
	$( document ).tooltip({
    track: true
  });


	// modal-link
	$('.modal-link').fancybox({
		closeBtn: false,
		padding: 0
	});


});
