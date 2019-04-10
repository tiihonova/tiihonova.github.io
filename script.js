var owl1 = $('.owl-carousel');
owl1.owlCarousel({
    loop: true,
    dots: false,
    nav: false,
    items: 1
});

$('.next').click(function() {
    owl1.trigger('next.owl.carousel');
});

$('.prev').click(function() {
    owl1.trigger('prev.owl.carousel');
});

$(document).on('click', '.topik-full', function() {
    $(this).closest('.topik').find('.panel').toggleClass('hidden');
});
