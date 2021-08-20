jQuery(function () {
  AOS.init({
    duration: 1000,
    once: true,
  });

  $(document).on("load", function () {
    AOS.refreshHard();
  });

  $(window).on("scroll", function () {
    var headerHeight = $("#header").height() - 1;

    if ($(this).scrollTop() > headerHeight) {
      $(".header_sticky").fadeIn();
    } else if ($(this).scrollTop() < headerHeight) {
      $(".header_sticky").fadeOut();
    }

    AOS.refresh();
  });

  $(window).on("load", function () {
    var headerHeight = $("#header").height() - 1;

    if ($(this).scrollTop() > headerHeight) {
      $(".header_sticky").fadeIn();
    } else if ($(this).scrollTop() < headerHeight) {
      $(".header_sticky").fadeOut();
    }
  });

  // function isScrolledIntoView(elem) {
  // 	var docViewTop = $(window).scrollTop()
  // 	var docViewBottom = docViewTop + $(window).height()

  // 	var elemTop = $(elem).offset().top
  // 	var elemBottom = elemTop + $(elem).height()

  // 	return elemBottom <= docViewBottom && elemTop >= docViewTop
  // }

  // $(window).on('scroll', function () {
  // 	$('.line-animation').each(function () {
  // 		if (isScrolledIntoView(this) === true) {
  // 			$(this).addClass('active')
  // 		}
  // 	})
  // })

  if ($(window).width() < 992) {
    $(".cooperation__slider, .localization-solutions__container").slick({
      infinite: false,
      slidesToShow: 1,
      lidesToScroll: 1,
      variableWidth: true,
      speed: 700,
      arrows: false,
      touchMove: false,
    });

    $(".roadmap__heading").on("click", function () {
      $(this).toggleClass("_active").next().slideToggle();
      $(".roadmap__heading").not(this).removeClass("_active").next().slideUp();
    });

    $(".solutions__container").slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      variableWidth: true,
      speed: 700,
      touchMove: false,
    });

    $(".creature__container").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 700,
      arrows: false,
      dots: true,
      touchMove: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
    });
  }

  $(".footer__to-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 2000);
  });

  $(".our-clients__slider, .tech__slider").slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 700,
    centerMode: true,
    centerPadding: "0",
    touchMove: false,
    responsive: [
      {
        breakpoint: 992,
        settings: "unslick",
      },
    ],
  });

  $(".review__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 700,
    centerMode: true,
    centerPadding: "0px",
    dots: true,
    touchMove: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false,
          fade: true,
        },
      },
    ],
  });

  $(".preview__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 700,
    centerMode: true,
    centerPadding: "150px",
    variableWidth: true,
    dots: true,
    touchMove: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: false,
          centerPadding: "0",
        },
      },
    ],
  });
});

var body = $("body");
var hamburger = $(".header__hamburger");
var sidebar = $(".header__sidebar");
var sidebarClose = $(".header__sidebar-close");
var plug = $(".header__sidebar-plug");
var toggleSidebar = $(
  ".header__hamburger, .header__plug, .header__sidebar-close"
);

toggleSidebar.on("click", function () {
  hamburger.toggleClass("_active");
  sidebarClose.toggleClass("_rotate");
  sidebar.toggleClass("_visible");
  plug.toggleClass("_visible");
  body.toggleClass("scroll_disable");
  $(".header__dropdown .dropdown__heading")
    .removeClass("_active")
    .next()
    .slideUp(300);
});

$(".header__button").on("click", function () {
  hamburger.removeClass("_active");
  sidebarClose.removeClass("_rotate");
  sidebar.removeClass("_visible");
  plug.removeClass("_visible");
  body.removeClass("scroll_disable");
});

$("ul.tabs__caption").on("click", "li:not(.active)", function () {
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active")
    .closest("div.tabs")
    .find("div.tabs__content")
    .hide()
    .eq($(this).index())
    .fadeIn(500);
});

$(".dropdown__heading").on("click", function () {
  $(this).toggleClass("_active").next().slideToggle(300);
});

$(".dropdown__back-btn").on("click", function () {
  $(this)
    .closest("div.header__dropdown")
    .find(".dropdown__heading")
    .toggleClass("_active")
    .next()
    .slideToggle(300);
});

$("body").on("click", ".link-move", function (event) {
  event.preventDefault();
  var id = $(this).attr("href"),
    top = $(id).offset().top;
  $("body,html").animate({ scrollTop: top - 50 }, 1500);
});

$("form input").on("change invalid", function () {
  var textfield = $(this).get(0);

  textfield.setCustomValidity("");

  if (!textfield.validity.valid) {
    textfield.setCustomValidity("Fill this line");
  }
});
