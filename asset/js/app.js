
  //accordion
const accHeader = document.querySelectorAll(".accordion__header");
[...accHeader].forEach(item => item.addEventListener("click" , function (e){
    const content = e.target.nextElementSibling;
    content.classList.toggle("is-active");
    content.style.height = `${content.scrollHeight}px`;
    if(!content.classList.contains("is-active")){
        content.style.height = "0px";
    }
    const icon = e.target.querySelector(".icon");
    
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");
}))

//accodion footer
const footerHeader = document.querySelectorAll(".footer-heading");
[...footerHeader].forEach(item => item.addEventListener("click" , function (e){
  console.log(e.target);
    const footerContent = e.target.nextElementSibling;
    footerContent.classList.toggle("is-active");
    footerContent.style.height = `${footerContent.scrollHeight}px`;
    if(!footerContent.classList.contains("is-active")){
      footerContent.style.height = "0px";
    }
    // const icon = e.target.querySelector(".icon");
    
    // icon.classList.toggle("fa-chevron-down");
    // icon.classList.toggle("fa-chevron-up");
}))
//toggle
const btn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-res");
btn.addEventListener("click" , handleToggleMenu)
function handleToggleMenu(e){
    menu.classList.toggle("is-show");
    // e.target.classList.toggle("fa-bars");
    // e.target.classList.toggle("fa-bars");
    
}
const btnClose = document.querySelector(".menu-close");
btnClose.addEventListener("click" , function(e){
  menu.classList.toggle("is-show");
}
)


$(document).ready(function(){
  $('.slick-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows : true,
    prevArrow : "<button type='button' class='slick-prev3 pull-left slick-arrow'><i class='fa-solid fa-chevron-left' aria-hidden='true'></i></button>",
    nextArrow : "<button type='button' class='slick-next3 pull-right slick-arrow'><i class='fa-solid fa-chevron-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 821,
        settings: {
          // centerMode: true,
          // centerPadding: '40px',
           slidesToShow: 1,
           arrows:false,
        }
      },
      {
        breakpoint: 1179,
        settings: {
          // centerMode: true,
          // centerPadding: '40px',
           slidesToShow: 1,
           arrows:false,
        }
      },
      {
        breakpoint: 375,
        settings: {
          // centerMode: true,
          // centerPadding: '40px',
           slidesToShow: 1,
           arrows:false,
        }
      },
    ]
});
});
$(document).ready(function(){
  $('.slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    arrows : true,
    prevArrow : "<button type='button' class='slick-prev pull-left slider-arrow'><i class='fa-solid fa-chevron-left' aria-hidden='true'></i></button>",
    nextArrow : "<button type='button' class='slick-next pull-right slider-arrow'><i class='fa-solid fa-chevron-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 790,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: '40px',
           slidesToShow: 1,
           dots:true,
           arrows:false,
           dots:true
        }
      },
      {
        breakpoint: 1240,
        settings: {
          // centerMode: true,
          // centerPadding: '40px',
           slidesToShow: 1,
           arrows:false,
           dots:true
        }
      },
    ]
  });
});
$(document).ready(function(){
  $('.recommend-list').slick({
    slidesToShow: 5,
    slidesToScroll: 4,
    dots:false,
    arrows : true,
    prevArrow : "<button type='button' class='slick-prev1 pull-left slider-arrow'><i class='fa-solid fa-chevron-left' aria-hidden='true'></i></button>",
    nextArrow : "<button type='button' class='slick-next1 pull-right slider-arrow'><i class='fa-solid fa-chevron-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 2.1,
          slidesToScroll:1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          // arrows: false,
          // centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 2.1,
          arrows:false,
          slidesToScroll:1,
        }
      },
      {
        breakpoint: 1180,
        settings: {
          arrows: true,
          // centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 3,
          slidesToScroll:2
        }
      },
    ]
});
});
$(document).ready(function(){
  $('.trending-list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:false,
    arrows : true,
    prevArrow : "<button type='button' class='slick-prev2 pull-left slider-arrow'><i class='fa-solid fa-chevron-left' aria-hidden='true'></i></button>",
    nextArrow : "<button type='button' class='slick-next2 pull-right slider-arrow'><i class='fa-solid fa-chevron-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 1.1,
        }
      }, 
      {
        breakpoint: 1180,
        settings: {
          arrows: true,
          // centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 2.1,
        }
      },]
});
});
$(document).ready(function(){
  $('.menu__child-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // dots:true,
    arrows : true,
    prevArrow : "<button type='button' class='slick-prev pull-left slider-arrow'><i class='fa-solid fa-chevron-left' aria-hidden='true'></i></button>",
    nextArrow : "<button type='button' class='slick-next pull-right slider-arrow'><i class='fa-solid fa-chevron-right' aria-hidden='true'></i></button>"
});
});
$(document).ready(function(){
  $('.brand-content').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows : true,
    prevArrow : "<button type='button' class='slick-prev pull-left slider-arrow'><i class='fa-solid fa-chevron-left' aria-hidden='true'></i></button>",
    nextArrow : "<button type='button' class='slick-next pull-right slider-arrow'><i class='fa-solid fa-chevron-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 789,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 3,

        }
      }, ]
  });
});
$(document).ready(function(){
  $('.recommend-list2').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows : true,
    prevArrow : "<button type='button' class='slick-prev1 pull-left slider-arrow'><i class='fa-solid fa-chevron-left' aria-hidden='true'></i></button>",
    nextArrow : "<button type='button' class='slick-next1 pull-right slider-arrow'><i class='fa-solid fa-chevron-right' aria-hidden='true'></i></button>"
});
});
