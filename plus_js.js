$(document).ready(() => {
    $(".slick").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1
              }
            },
        ]
    });
});