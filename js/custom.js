//	jQuery.noConflict();
$(document).ready(function(){

	$('.field .field-type-text .field-field-teaser').siblings().css({'display' : 'none'});

	$('div#exercise-box-container div').hover(
		function(){
		    $(this).css({'background' : '#ff66cc'});
		},
		function(){
		    $(this).css({'background' : '#FFA500'});
		});
	$('#exercise-box-container > div').click(function(){
		var className = $(this).attr('class');
		$('#practice-box-container > div').fadeOut(1000);
		$('#practice-box-container > div.' + className).fadeToggle(1000);
	});


/*
$('div#click1').click(function(){
	$('#practice-animate').fadeToggle('slow');

});
*/

/*
	$('div#click1').bind({
			click: function(){
				//$('#practice-animate').fadeToggle();
				$('#practice-animate').animate({ opacity: 0, top: "10px" }, 'fast');
			},
			click: function(){
				//$('#practice-animate').fadeToggle();
				$('#practice-animate').animate({ opacity: 1, top: "-=10px" }, 'fast');
			}
	});
*/

$('a.show-hide').click(function(){
    $('div.show-hide').toggle();
});
$('a.fade-inout').click(function(){
    $('div.fade-inout').fadeToggle();
});
$('a.slide-updown').click(function(){
    $('div.slide-updown').slideToggle();
});




// Show Hide
	$('h3.show').click(function(){
	    $('p.show-hide').show();
	});
	$('h3.hide').click(function(){
	    $('p.show-hide').hide();
	});
	$('h3.toggle').click(function(){
	    $('p.show-hide').toggle();
	});

// Fade In/Out
	$('h3.fadein').click(function(){
	    $('p.fade-inout').fadeIn();
	});
	$('h3.fadeout').click(function(){
	    $('p.fade-inout').fadeOut();
	});
	$('h3.fadetoggle').click(function(){
	    $('p.fade-inout').fadeToggle();
	});

// Slide Up/Down
	$('h3.slideup').click(function(){
	    $('p.slide-updown').slideUp();
	});
	$('h3.slidedown').click(function(){
	    $('p.slide-updown').slideDown();
	});
	$('h3.slidetoggle').click(function(){
	    $('p.slide-updown').slideToggle();
	});

























});