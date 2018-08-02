$(document).ready(function() {

  $(".carousel .owl-carousel").owlCarousel({
   items: 1,
   loop: true,
   margin: 10,
   autoplay: true,
   autoplayTimeout: 5000,
   autoplayHoverPause: true
 });

  $(".carousel2 .owl-carousel").owlCarousel({
   loop:true,
   margin:10,
   responsiveClass:true,
   autoplay: true,
   autoplayTimeout: 5000,
   autoplayHoverPause: true,
   responsive:{
    0:{
      items:2,
      nav:true
    },
    600:{
      items:3,
      nav:true
    },
    1000:{
      items:5,
      nav:true,
      
    }
  }
});


/*  $(".student_item").on("click", function() {
    if ($(this).is(".student_item_active")) {
      $(".student_item").removeClass("student_item_active");
    } else {
      $(".student_item").removeClass("student_item_active");
      $(this).addClass("student_item_active");
    }
  });*/




  $('.photo-popup-link').magnificPopup({type: 'image'}); // фото препода


// Отзывы "начало"
  $('.open-popup-link').magnificPopup({type:'inline'});

  $(".student_item").each(function(i){
    $(this).find("a").attr("href", "#work_" + i);
    $(this).find(".student_item_content").attr("id", "work_" + i)
  });
// Отзывы "конец""  

});
