$('#nav-icon1').click(function() {
    $(this).toggleClass('open');
    $('.menu').toggleClass('open');
});
// maps
function initMap() {
    var uluru = { lat: 50.4331085, lng: 30.5156884 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false,
        disableDefaultUI: true,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
// initMap();
// maps end
(function() {

    var score = $('#score');
    var score2 = $('#score2');
    var score3 = $('#score3');
    var test = null;
    var test2 = null;
    var test3 = null;
    var sliderVal = document.querySelector('#sliderVal');
    var totalPrice = document.querySelector('#total_price');
    var onePrice = document.querySelector('#one_price');

    function setScore2Min(minVal) {
        score2.attr({ min: minVal });
        score2.rangeslider('update', true);
    }

    function setCoastValue(val, valPerOne) {
        totalPrice.innerHTML = val + ' грн';
    }



    function calculateCoastValue() {
        var scoreVal = score[0].value;
        var score2Val = score2[0].value;
        var score3Val = score3[0].value;
        setCoastValue(scoreVal * score2Val * score3Val);
    }

    score.rangeslider({
        polyfill: false,
        onInit: function() {
            test = document.querySelector('#score__one');
            test.innerHTML = score[0].value + ' ' + 'грн';
            calculateCoastValue();
        },
        onSlide: function(pos, val) {
            calculateCoastValue();
            test.innerHTML = val + ' ' + 'грн';
        },
        onSlideEnd: function(pos, val) {

        },
    });

    score2.rangeslider({
        polyfill: false,
        onInit: function() {
            test2 = document.querySelector('#score__two');
            test2.innerHTML = score2[0].value;
            calculateCoastValue();
        },
        onSlide: function(pos, val) {
            test2.innerHTML = val;
            calculateCoastValue();
        },
        onSlideEnd: function(pos, val) {

        },
    });
    score3.rangeslider({
        polyfill: false,
        onInit: function() {
            test3 = document.querySelector('#score__three');
            test3.innerHTML = score3[0].value;
            calculateCoastValue();
        },
        onSlide: function(pos, val) {
            test3.innerHTML = val;
            calculateCoastValue();
        },
        onSlideEnd: function(pos, val) {

        },
    });
})();


$('.lavel-sliders').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow:"<button class='slick-prev slick-arrow' aria-label='Next' type='button' style=''><i class='fas fa-angle-left'></i></button>",
    nextArrow:"<button class='slick-next slick-arrow' aria-label='Next' type='button' style=''><i class='fas fa-angle-right'></i></button>",
    responsive: [{
            breakpoint: 1024,
            settings: {
                arrows: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        }
    ]
});

$('.photo-slides').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                autoplay: true,
                speed: 500,
                dots: true,
            }
        }
    ]

});
$('.video-slides').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                autoplay: true,
                speed: 500,
                
            }
        }
    ]

});


$('[data-fancybox="gallery"]').fancybox();




$('.my-slider').cardslider({
    keys: {
        next: 15,
        prev: 40
    },
    direction: 'down',
    nav: true,
    swipe: true,
    dots: false,
    loop: true,
    beforeCardChange: null,
    afterCardChange: null

});


$('.panel-heading').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    $('.panel-heading').not(this).removeClass('in').next().slideUp();
});

$(document).ready(function() {
    for (var i = 0; i < $('.my-slider ul li').length; i++) {
        var block = $($('.my-slider ul li span')[i]);

        if (i >= 0) {
            block.text(i + 1);
        } else {
            // URL для картинки может быть любым =)
            block.html('<img src="picture.jpg" />');
        }
    }
});

// accordion now
$("#all").click(function() {
    $('input:checkbox').not(this).prop('checked', this.checked);
});
// end accordion

$("a.btn").click(function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
});

$(".footer__menu li").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
});