$(function(){
    $('.banner-section_slider').slick({
        dots:true,
        prevArrow:'<button class="banner-section_slider-btn banner-section_slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow:'<button class="banner-section_slider-btn banner-section_slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
    });
$('.tab').on('click', function(e){
e.preventDefault();


  $('.tab').removeClass('tab--active');
  $('.tabs-content').removeClass('tabs-content--active');
  
  $(this).addClass('tab--active');
  $($(this).attr('href')).addClass('tabs-content--active');
  });
  
$('.product-item_favorite').on('click',function(){
  $('.product-item_favorite').toggleClass('product-item_favorite--active')
});
   $('.product-slider').slick({});
});