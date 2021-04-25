$(function () {
  // Init WOW.js and get instance
  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 0,
    mobile: true,
    live: true,
  });
  wow.init();

  $('.card-portfolio__img').css(
    'transition',
    'transform ' + 0.01 * $('.card-portfolio__img').height() + 's ease',
  );

  // $(".header").stickMe({
  //   // Длительность анимации появления
  //   transitionDuration: 600,

  //   // Включает тень у шапки
  //   shadow: true,

  //   // Прозрачность тени у шапки
  //   shadowOpacity: 0.3,

  //   // Включение анимации при появлении шапки
  //   animate: true,

  //   // true: Шапка прилипнет к верху когда окно браузера будет достигнут центр страницы
  //   // false: Шапка прилипнет к верху как только пропадет из поля зрения при скролинге страницы
  //   triggerAtCenter: false,

  //   //  Шапка прилипнет к верху при пролистывании страницы на 200 пикселей
  //   topOffset: 750,

  //   // Плавное появление 'fade' или скольжение при появлении 'slide'
  //   transitionStyle: "fade",

  //   //  Шапка прикреплена к верху при загрузке страницы
  //   stickyAlready: false,
  // });

  $('.menu-nav__popup').on('click', function (e) {
    e.preventDefault();
    $('.menu').toggleClass('menu--active');
    $('main').toggleClass('main--active');
  });

  // $('.card-portfolio').on('click', function (e) {
  //   e.preventDefault();
  //   $('.card-portfolio__image').removeClass('animate__zoomIn');
  //   $(this).toggleClass('animate__rotateOutUpLeft');
  // });

  $('.partners__list').slick({
    infinite: true, // бесконечная прокрутка слайдов
    slidesToShow: 4, // показывать по 3 слайда
    slidesToScroll: 1,
    arrows: false, // не показывать стрелки
    dots: false, // показывать точки индикаторы
    autoplay: true,
    dotsClass: 'slick-dots', // название класса для точек
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
      scope: 'local',
    },
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
});
