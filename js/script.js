$(document).ready(function(){
    $('.carousel_inner').slick({
        speed: 1500,
        autoplay: true, 
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/vector_2.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/vector_1.svg"></button>',
    });

    $('ul.tabs').on('click', 'li:not(.tab_active)', function() {
        $(this)
          .addClass('tab_active').siblings().removeClass('tab_active')
          .closest('div.container').find('div.carts_iphone').removeClass('carts_active').eq($(this).index()).addClass('carts_active');
      });
  });