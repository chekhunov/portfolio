$(function () {

  $(".menu-nav__popup").on("click", function (e) {
    e.preventDefault();
    $(".menu").toggleClass("menu--active");
    $("main").toggleClass("main--active");
  });

  $(".partners__list").slick({
    infinite: true, // бесконечная прокрутка слайдов
    slidesToShow: 4, // показывать по 3 слайда
    slidesToScroll: 1,
    arrows: false, // не показывать стрелки
    dots: false, // показывать точки индикаторы
    autoplay: true,
    dotsClass: "slick-dots", // название класса для точек
    responsive: [
      {
        breakpoint: 1025, // максимальная ширина экрана
        settings: {
          slidesToShow: 2, // показывать по 2 слайда
          slidesToScroll: 1, // скроллить по 2 слайда
        },
      },
      {
        breakpoint: 688,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }); 

  var containerEl1 = document.querySelector('[data-ref="portfolio"]');
  var containerEl2 = document.querySelector('[data-ref="design"]');

  var config = {
    controls: {
      scope: "local",
    },
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
});

