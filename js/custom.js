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




























});