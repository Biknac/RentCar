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

/*
$('a').on('click', function (event) {
  var $anchor = $(this)
  $('html, body')
  .stop()
  .animate(
    {
      scrollTop: $($anchor.attr('href')).offset().top,
    },
    {
      duration: 2000,
      specialEasing: {
        width: 'linear',
        height: 'easeinOutCubic',
      },
    }
  )
  event.preventDefault()
})
*/
