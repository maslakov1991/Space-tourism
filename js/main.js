$(function () {
    $('.slider__box').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 481,
                settings:{
                    arrows: false,
                    autoplay: 3000
                }
        }
    ]
        
    })

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('active');
    });
});