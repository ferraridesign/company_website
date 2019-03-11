/**
 * Main JS file where all custom JS is done
 */
(function($) {
"use strict";
	$(document).ready(function() {
		$('body').addClass('loaded');
	});

	$(document).ready( function() {
		// Slideout Menu
    $('#slideout-trigger').on('click', function(event){
    	event.preventDefault();
    	// create menu variables
    	var slideoutMenu = $('#slideout-menu');
    	var slideoutMenuWidth = $('#slideout-menu').outerWidth();

    	// toggle open class
    	slideoutMenu.toggleClass("open");

    	// slide menu
    	if (slideoutMenu.hasClass("open")) {
	    	slideoutMenu.animate({
		    	right: "0px"
	    	});
    	} else {
	    	slideoutMenu.animate({
		    	right: -slideoutMenuWidth
	    	}, 250);
    	}
    });

		$('#nav-close').on('click', function(event){
			event.preventDefault();
			// create menu variables
    	var slideoutMenu = $('#slideout-menu');
    	var slideoutMenuWidth = $('#slideout-menu').outerWidth();

    	// toggle open class
    	slideoutMenu.toggleClass("open");

    	// slide menu
    	if (slideoutMenu.hasClass("open")) {
	    	slideoutMenu.animate({
		    	right: "0px"
	    	});
    	} else {
	    	slideoutMenu.animate({
		    	right: -slideoutMenuWidth
	    	}, 250);
    	}
    });

		$('#credits-trigger, #credits-close').on('click', function(event){
			event.preventDefault();
			// create menu variable
    	var creditsPop = $('#credits-pop');
		//var insideAnchor = $('#credits-pop section a');
    	// toggle open class

			if (creditsPop.hasClass("open")) {
				creditsPop.removeClass("open");
			} else {
				creditsPop.addClass("open");
			}
    });

		// Gravity Forms Styling Hacks
		jQuery("#field_6_1, #field_6_2, #field_6_3, #field_6_9").wrapAll('<div class="left-fields"></div>');
		jQuery("#field_7_1, #field_7_2, #field_7_3").wrapAll('<div class="left-fields"></div>');
		jQuery("#field_14_1, #field_14_2, #field_14_3").wrapAll('<div class="left-fields"></div>');
		jQuery("#field_25_1, #field_25_2, #field_25_3").wrapAll('<div class="left-fields"></div>');
		jQuery("#field_33_1, #field_33_2, #field_33_3").wrapAll('<div class="left-fields"></div>');

		// Spark Packages Row Tabs
		$('#packages-row .panel').hide();
		$('#packages-row .panel:first-of-type').show();
		$('#packages-row .tabs a:first-of-type').addClass('active');

		$('#packages-row .tabs a').on('click', function() {
			event.preventDefault();
			$('#packages-row .tabs a').removeClass('active');
			$(this).addClass('active');
			var href = $(this).attr('data-id');
			var openPanel = $( '#' + href );
			console.log(openPanel);
			$('#packages-row .panel').hide();
			$( openPanel ).fadeIn(1000);
		});
	});

 /*PORTFOLIO MASONRY GALLERY*/

	/*var $masonry_container = $('.masonry-container').imagesLoaded(function(){
			$masonry_container.isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: '.grid-sizer',
	gutter: 30
  }
});
	});*/

	var $container = $( '#spark-themes .items').imagesLoaded(function(){
		$container.isotope({
  itemSelector: '.item',
  percentPosition: true,
  layoutMode: 'fitRows',
  fitRows: {
  	gutter: '.gutter-sizer'
  }
});
		});

	$('.filter li a').click(function(){
	$('.filter li a').removeClass('active');
	$(this).addClass('active');

		var selector = $(this).attr('data-filter');
				$container.isotope({ filter: selector });

		return false;
	});

		 // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {

      $(".tab_content").hide();
      var activeTab = $(this).attr("rel");
      $("#"+activeTab).fadeIn();

      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

    /*$(".tabs").css("margin-top", function(){
       return ($(".tab_container").outerHeight() - $(".tabs").outerHeight() ) / 2;
    });*/
    });
    $(".tab_container").css("min-height", function(){
      return $(".tabs").outerHeight() + 50;
    });
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {

      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel");
      $("#"+d_activeTab).fadeIn();

	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");

	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });


	/* Extra class "tab_last"
	   to add border to bottom side
	   of last tab
	$('ul.tabs li').last().addClass("tab_last");*/

})(jQuery);

//Scrolling Anchor Link
jQuery(function($) {
	"use strict";
		$('a[href*="#"]:not([href="#"])').click(function() {

    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') || location.hostname === this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
});
