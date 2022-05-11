
$(function(){
    $('.recommend-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay:true,
        speed:1000,
        autoplayspeed:5000,
        arrows:false,
        centerPadding:'100px',
        centerMode:true,
          responsive:[{
            breakpoint:768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: '0' ,
            }
          }]
      });
});

$(function(){
  $('#nav-btn').on('click',function(){
    $(this).toggleClass('-active');
    $('#nav').toggleClass('-active');
  });
});

$(function(){
  new WOW().init();
});

$(function(){
  $('.js-accordion').on('click',function(){
    /*$(this).toggleClass('-active');*/
    $(this).next().slideToggle();
  })
});