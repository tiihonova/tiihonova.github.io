$(function() {

$("ul.select-tooth").on("click", "li:not(.active)", function() {

  $(this)
	.addClass('active').siblings().removeClass('active')
	.closest('div.container-tooths').find('div.tab_content').removeClass('active').eq($(this).index()).addClass('active')

});
	
	$(".video_our-services, .advantages").on("mouseover", "video", function(){
  this.play();
  $( this ).css( "background-color", "white" );
	});
	$(".video_our-services, .advantages").on("mouseleave", "video", function(){
	  this.pause();
	})

	$('.reviews-slider').slick({
		autoplay: false,
		autoplaySpeed: 2000,
		arrows: true,
		slidesToShow: 3,
	});

	$('.slider').slick({
	  // dots: true,
	  // infinite: true,
	  // speed: 500,
	  // fade: true,
	  // cssEase: 'linear'
	});

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

