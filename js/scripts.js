$(document).ready(function () {

    //слайдер секции header
    $('.header-content__slider').slick({        
        infinite: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        arrows: false
    });    

        //изменяем кнопки слайдера header 
    $('.slider-nav__prev').click(function () {
        $('.header-content__slider').slick('slickPrev');
    });

    $('.slider-nav__next').click(function () {
        $('.header-content__slider').slick('slickNext');
    });

    //слайдер секции category 
    $('.category__slider-cards').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false

    });

        //изменяем кнопки слайдера category 
    $('.prev-ct').click(function () {
        $('.category__slider-cards').slick('slickPrev');
    });

    $('.next-ct').click(function () {
        $('.category__slider-cards').slick('slickNext');
    });


    //слайдер секции product
    $('.product__slider-cards').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false
    });

        //изменяем кнопки слайдера category 
    $('.btn-slider__product-prev').click(function () {
        $('.product__slider-cards').slick('slickPrev');
    });

    $('.btn-slider__product-next').click(function () {
        $('.product__slider-cards').slick('slickNext');
    });


    //слайдер секции news
    $('.news__article').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
    });

        //изменяем кнопки слайдера category 
    $('.btn-slider__news-prev').click(function () {
        $('.news__article').slick('slickPrev');
    });

    $('.btn-slider__news-next').click(function () {
        $('.news__article').slick('slickNext');
    });




});