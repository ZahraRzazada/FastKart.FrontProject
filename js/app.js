// document.querySelector("#hover-product").onmouseover=function(){
//     document.querySelector(".product-drop2").style.display="block"
// }
// document.querySelector("#hover-product").onmouseleave=function(){
//     document.querySelector(".product-drop2").style.display="none"
// }
// document.querySelector(".product-drop2").onmouseleave=function(){
//     document.querySelector(".product-drop2").style.display="none"
// }
// //----------------------------
// document.querySelector("#hover-page1").onmouseover=function(){
//     document.querySelector(".pages-drop2").style.display="block"
// }
// document.querySelector(".pages-drop2").onmouseleave=function(){
//     document.querySelector(".pages-drop2").style.display="none"
// }
// document.querySelector("#hover-page1").onmouseleave=function(){
//     document.querySelector(".pages-drop2").style.display="none"
// }
// //-----------------------------
// document.querySelector("#hover-page2").onmouseover=function(){
//     document.querySelector(".pages-drop3").style.display="block"
// }
// document.querySelector(".pages-drop3").onmouseleave=function(){
//     document.querySelector(".pages-drop3").style.display="none"
// }
// document.querySelector("#hover-page2").onmouseleave=function(){
//     document.querySelector(".pages-drop3").style.display="none"
// }
$('.slider1').slick({
    dots: false,
    infinite: true,
    arrow:false,
    autoplay:true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.slider2').slick({
    dots: false,
    infinite: true,
    arrow:false,
    autoplay:true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.slider3').slick({
    dots: false,
    infinite: true,
    arrow:false,
    autoplay:true,
    speed: 300,
    slidesToShow: 5 ,
    slidesToScroll: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });