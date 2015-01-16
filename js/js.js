function scrollTo(element_id, color){
	jQuery('.section--active').removeClass('section--active');

	jQuery('.fader').attr('class','fader lighten-2').addClass(color);
	setTimeout(function(){
		jQuery(element_id).addClass('section--active');
		jQuery('html, body').scrollTop(jQuery(element_id).offset().top);
	  jQuery('.fader').addClass('fader--out');
	  $('.service-content h3').each(function(index, el) {
  		$(this).data('offset', $(this).offset().top-60)
  	});
	},1000);

}

function scrollToInside(element_id){
  $('#services').stop(true,true).animate({
      scrollTop: $(element_id).data('offset')
  }, 1000, 'easeOutCubic');
}

function listenWidth( e ) {
	// jQuery('html, body').scrollTop(jQuery('.section--active').offset().top);
	// jQuery('.section--active').scrollTop(0);
	setTimeout(function(){
		$('.service-content h3').each(function(index, el) {
	  	$(this).data('offset', $(this).offset().top-50)
	  });
	},300)
}

$(function() {

	$(".home-title-main").fitText();
	$(".home-title-sub").fitText(1.95, { minFontSize: '25px'});

  jQuery('.inlink').click(function(){
      scrollTo(jQuery(this).attr('href'), jQuery(this).data('color'));
      return false;
  });

  $('ul.tabs').tabs();

  $('.services-tab').click(function(event) {
  	scrollToInside(jQuery(this).find('a').data('href'));
  });

  $(window).load(function() {
  	setTimeout(function(){
  		jQuery('html, body').scrollTop(0);
  		jQuery('.fader').addClass('fader--out');
  	},300);
  	$(window).bind("resize", listenWidth);
  });
  
});
