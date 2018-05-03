$(document).ready(function() {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
     items: 1
    // loop: true,
    // margin: 10,
    // autoplay: false,
    // autoplayTimeout: 5000,
    // autoplayHoverPause: false
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
	
	$(".reviews_student_text").on("click", function(){

		if($(".reviews_student_block").css('display') == 'flex'){
			$(".reviews_student_block").css('display', 'none');
		}else{
			$(".reviews_student_block").css('display', 'flex');

		}
	});

	// function carouselService() {
	// 	$('.item').each(function() {
	// 		var t = $(this),
	// 		h = t.find('.slide-text').outerHeight();
	// 		t.find('.carousel-pic').css('min-height', h);
	// 	});
	// };
	// carouselService();
	
});
