$(function() {

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


	$('#button-video').click(function(event){
  event.preventDefault();
  $('.video-header').addClass('video-header-block');
	});

	$(".close").click(function(event){
  $(this).parents(".video-header").removeClass("video-header-block");
	});

	// $(".close-slider").click(function(event){
 //  $(this).parents(".video-header").removeClass("video-header-block");
	// });

  $(".anchors, .bottom-line-header").on("click","a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();
      //забираем идентификатор бока с атрибута href
      var id  = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({scrollTop: top}, 750);
  });

  $('.slider-open').click(function(event){
    event.preventDefault();
    $('.big-container').addClass('big-container-block');
    $('.photo').addClass('photo-disable').removeClass('photo');
    window.scrollTo({
      top: $('.big-container').offset().top + $('.big-container').height()/2,
      behavior: "smooth"
    });

	});

$(".close-slider").click(function(event){
$('.big-container').removeClass('big-container-block');
$('.photo-disable').addClass('photo').removeClass('photo-disable');
	});

$('.slider').slick({
  infinite: true,
  speed: 300,
  fade: true,
  cssEase: 'linear',
  prevArrow:'<img class="slick-prev pull-left" src="img/back.png" />',
  nextArrow:'<img class="slick-next pull-right"  src="img/right-arrow.png" />'
});

$('.slider2').slick({
  infinite: true,
  speed: 300,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 1300,
  prevArrow:'<img class="slick-prev pull-left" src="img/back.png" />',
  nextArrow:'<img class="slick-next pull-right"  src="img/right-arrow.png" />'
});


$('#loadMore').on('click', function(e){
    e.preventDefault();
    $('.photo').slice(6, 30).slideDown();
});

$('.button-roll').on('click', function(e){
    e.preventDefault();
    $('.photo').slice(10, 30).slideUp();
});

$('#loadMore').click(function(event){
  $('.button-roll').addClass('button-roll-block').removeClass('button-roll');
  $('#loadMore').addClass('button-roll');
});

$('.button-roll-iblock').click(function(event){
  $('.button-roll-block').addClass('button-roll').removeClass('button-roll-block');
  $('.button-n').removeClass('button-roll');
});


$('.projects').click(function(event){
  $('.projects-list').addClass('projects-list-active').removeClass('projects-list');
});

$('.close-project').click(function(event){
  $('.projects-list-active').addClass('projects-list').removeClass('projects-list-active');
});

// $(".slider").click(function(e) {
//   e.preventDefault();
//   $(".slider-photo").removeClass('slick-active');
//   $(this).addClass('slick-active');
// });




});


$(window).on('load', function(){
  	$('.preloader').delay(1000).fadeOut('slow');
  });