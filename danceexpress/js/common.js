$(document).ready(function() {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
  });

  $(".student_item").on("click", function() {
    if ($(this).is(".student_item_active")) {
      $(".student_item").removeClass("student_item_active");
    } else {
      $(".student_item").removeClass("student_item_active");
      $(this).addClass("student_item_active");
    }
  });

  $(".student_item").hover(function() {
    if ($(this).is(".student_item_active")) {
      $(".student_item").removeClass("student_item_active");
    } else {
      $(".student_item").removeClass("student_item_active");
      $(this).addClass("student_item_active");
    }
  });
});
