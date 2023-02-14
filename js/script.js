$(document).ready(function() {
  $('.oc-slider').slick({
    infinite: true,
    swipe: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true
  });
});

window.onresize = start;
function start(){
  let iw = window.innerWidth;
  let ih = window.innerHeight;
  let hr = window.location.href;

  if ( (iw < 1280 || ih < 720) && hr == "https://biknac.github.io/RentCar/"){
   window.location.href = './mobile';

  } else if ( iw >= 1280 && ih >= 720 && hr == "https://biknac.github.io/RentCar/mobile"){
    window.location.href = './';
   }

}

start();
