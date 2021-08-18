jQuery(function () {
  $("body").addClass("scroll_disable");

  $(".preloader").delay(2000).fadeOut(1000);

  setTimeout(function () {
    $("body").removeClass("scroll_disable");
  }, 2000);
});
