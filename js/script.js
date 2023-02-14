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

  console.log("Window size:");
  console.log(iw);
  console.log(ih);

  if (iw >= 1280 && ih >= 720  ){
    $('.mobile').removeClass('_show');
  }
  
  if (iw < 1280 || ih < 720 ){
    $('.mobile').addClass('_show');
  }

}

start();
