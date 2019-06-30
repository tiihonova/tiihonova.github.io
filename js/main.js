	$(document).ready(function() {
		var $status = $('#counter-rev');
		var $slickElement = $('.reviews-slider');

		$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
		    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		    var i = (currentSlide ? currentSlide : 0) + 1;
		    $status.html('<span class="counter-active">' + i + '</span>' + ' / ' + slick.slideCount);
		});

		var $status1 = $('#counter-example');
		var $slickElement1 = $('.example-wrapper-w .example-slider');
		

		$slickElement1.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
		    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		    var i = (currentSlide ? currentSlide : 0) + 1;
		    $status1.html('<span class="counter-active">' + i + '</span>' + ' / ' + slick.slideCount);
		});

		var $status2 = $('#counter-example-m');
		var $slickElement2 = $('.example-wrapper-m .example-slider');

		$slickElement2.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
		    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		    var i = (currentSlide ? currentSlide : 0) + 1;
		    $status2.html('<span class="counter-active">' + i + '</span>' + ' / ' + slick.slideCount);
		});

		$('.example-wrapper-w .example-slider').slick({
			centerMode: true,
			autoplay: false,
			autoplaySpeed: 2000,
			arrows: true,
			slidesToShow: 1,
			appendArrows: '.sk_nav',
			variableWidth: true,
		});

		$('.example-wrapper-m .example-slider').slick({
			centerMode: true,
			autoplay: false,
			autoplaySpeed: 2000,
			arrows: true,
			slidesToShow: 1,
			appendArrows: '.sk_nav-m',
			variableWidth: true,
		});

		$('.reviews-slider').slick({
			autoplay: false,
			autoplaySpeed: 2000,
			arrows: true,
			slidesToShow: 3,
			appendArrows: '.sl_nav',
			responsive: [
			{
				breakpoint: 992,
				settings:{
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings:{
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings:{
					slidesToShow: 1,
				}
			} 
			]
		});

		$('.photo-slider').slick({
			autoplay: false,
			autoplaySpeed: 2000,
			arrows: false,
			slidesToShow: 1,
			variableWidth: true,
			dots: true,
			responsive: [
			{
				breakpoint: 1170,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
});

		$(function($) {
			var work_slider = $(".work-slider");
			work_slider.flickity({
				contain: true,
				imagesLoaded: false,
				pageDots: true,
				prevNextButtons: false,
				adaptiveHeight: true,
				dragThreshold: 20,
				bgLazyLoad: 1
			});
			var flkty = work_slider.data("flickity");
			var work_dots = $(".work-slider .dot");
			work_slider.on("select.flickity", function() {
				var index = flkty.selectedIndex;
				var this_dot = work_dots.eq(index);
				this_dot.prevAll(".dot").addClass("active");
				this_dot.nextAll(".dot").removeClass("active");
			});
			if (device.desktop()) {
				var $imgs = $(".work-slide__bg");
				var $panels = $(".work-panel");
				work_slider.on("scroll.flickity", function() {
					flkty.slides.forEach(function(slide, i) {
						var img = $imgs[i];
						var panel = $panels[i];
						var x = (slide.target + flkty.x) * -1 / 2;
						var x2 = (slide.target + flkty.x) * -1 / 1.2;
						img.style.transform = "translateX( " + x + "px)";
						panel.style.transform = "translateX( " + x2 + "px)";
					});
				});
			}
		});

	$('.reviews-play').magnificPopup({ 
		type: 'iframe',
	});

	$(".example-slide").on("mouseover", "video", function(){
		this.play();
		$( this ).css( "background-color", "white" );
	});
	$(".example-slide").on("mouseleave", "video", function(){
		this.pause();
	});
});