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

// initMap() - функция инициализации карты
function initMap() {
  // Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
  var centerLatLng = new google.maps.LatLng(45.360068, 40.696435);
  // Обязательные опции с которыми будет проинициализированна карта
  var mapOptions = {
    center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
    zoom: 17              // Зум по умолчанию. Возможные значения от 0 до 21
  };
  // Создаем карту внутри элемента #map
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var marker = new google.maps.Marker({
    position: centerLatLng,              // Координаты расположения маркера. В данном случае координаты нашего маркера совпадают с центром карты, но разумеется нам никто не мешает создать отдельную переменную и туда поместить другие координаты.
    map: map,                            // Карта на которую нужно добавить маркер
    title: "Школа танцев DanceExpress" // (Необязательно) Текст выводимый в момент наведения на маркер
  });
}
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);

});
