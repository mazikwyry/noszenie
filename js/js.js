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

    $("#form").submit(function(){
      $('#send_button').html("Chwilka...");
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: { email: $("#icon_telephone").val(), name:  $("#icon_prefix").val(), text:  $("#textarea").val()}
      }).done(function() {
        toast('Dziękuje za kontakt!', 6000) 
        setTimeout(function(){
            $('#textarea').val("").blur();
            $('#icon_telephone').val("").blur();
            $('#icon_prefix').val("").blur();
            $('#send_button').html("Wyślij <i class=\"mdi-content-send right\"></i>");
        },2000)
      });
      return false;
    })
  
});
