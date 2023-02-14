//Animation OC

function ocba_up_left() {
    $('.oc-button-accept').addClass('_hide-left'); 
    document.getElementsByClassName('oc-button-accept')[0].style.width = "50px";
    document.getElementsByClassName('slick-arrow')[0].style['pointer-events'] = "none";
    document.getElementsByClassName('slick-arrow')[1].style['pointer-events'] = "none";
  }

function ocba_up_right() {
    $('.oc-button-accept').addClass('_hide-right'); 
    document.getElementsByClassName('oc-button-accept')[0].style.width = "50px";
    document.getElementsByClassName('slick-arrow')[0].style['pointer-events'] = "none";
    document.getElementsByClassName('slick-arrow')[1].style['pointer-events'] = "none";
  }

function ocba_start_mid(){
    document.getElementsByClassName('oc-button-accept')[0].style.display = "none";
    $('.oc-button-accept').addClass('_hide-start'); 
}
function ocba_end_mid(){
    document.getElementsByClassName('oc-button-accept')[0].style.display = "block";
    document.getElementsByClassName('oc-button-accept')[0].style.width = "295px";
}

function ocba_down() {
    $('.oc-button-accept').removeClass('_hide-left');
    $('.oc-button-accept').removeClass('_hide-right');
    $('.oc-button-accept').removeClass('_hide-start'); 
    document.getElementsByClassName('oc-button-accept')[0].style.width = "300px";
    document.getElementsByClassName('slick-arrow')[0].style['pointer-events'] = "auto";
    document.getElementsByClassName('slick-arrow')[1].style['pointer-events'] = "auto";
    
  }


$('body').on('click', '.slick-next', function () {
    ocba_up_left();
    setTimeout(ocba_start_mid, 250);
    setTimeout(ocba_end_mid, 900);
    setTimeout(ocba_down, 950);
})

$('body').on('click', '.slick-prev', function () {
    ocba_up_right();
    setTimeout(ocba_start_mid, 250);
    setTimeout(ocba_end_mid, 900);
    setTimeout(ocba_down, 950);
})



//Animation scroll

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top + 1
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus();
          };
        });
      }
    
  });

    if(window.pageYOffset >= 754){
        document.getElementsByClassName('oc-button-accept').style.display = "none";
    }
    
      const ArrowUp = {
        addEventListener() {
          window.addEventListener('scroll', () => {
            const scrollX = window.scrollX || document.documentElement.scrollTop;
            if(scrollX > 650)
            {
              document.getElementById("arrow-up").style.display = "block";
              setTimeout(() => 
                { document.getElementById("arrow-up").style.opacity = 0.4; }, 
                this.animationDelay + 20);  
            }
            else
            {
              document.getElementById("arrow-up").style.display = "none";
              document.getElementById("arrow-up").style.opacity = 0;
            }
          
          });

        }
      }
      ArrowUp.addEventListener();
    
     
    $(function () {       

        $('#arrow-up').bind("click", function () {
            $('html, body').animate({scrollTop: 0 }, 1200);
            return false;
        });
        $('#arrow-up').mouseenter(function(){
          $('#arrow-up').animate({opacity:0.8},75);
        });
      
        $('#arrow-up').mouseleave(function(){
          $('#arrow-up').animate({opacity:0.4},75);
        });
    });


//Animation HIW

let n_click = 1 

function pointer_events() {
    $('.button-np').css('pointer-events', 'none');
    setTimeout(() => $('.button-np').css('pointer-events', 'auto'), 2400);
}

$('body').on('click', '.next-step', function () {

  if (n_click == 1) {

    $('.hiw-content').addClass('_hide');
    setTimeout(() => $('.one-step').css('display', 'none'), 1000);
    setTimeout(() => $('.two-step').css('display', 'block'), 1550);
    setTimeout(() => $('.hiw-content').removeClass('_hide'), 1600);
  
    $('.button-np').addClass('_hide');
    setTimeout(() => $('.prev-step').css('display', 'block'), 1550);
    setTimeout(() => $('.button-np').removeClass('_hide'), 1600);
  
    $('#point_1').animate({opacity:0},600);
    $('#point_2').animate({opacity:0},1000);
    $('#point_3').animate({opacity:0},1400);
    $('#point_4').animate({opacity:0},1800);
    $('#point_5').animate({opacity:0},2150);
    $('#point_6').animate({opacity:0},2550);
    $('#point_7').animate({opacity:0},2900);
    $('#big_point_2').animate({opacity:0},3200);
   
    pointer_events();
  }

  if (n_click == 2) {

    $('.hiw-content').addClass('_hide');
    setTimeout(() => $('.two-step').css('display', 'none'), 1000);
    setTimeout(() => $('.three-step').css('display', 'block'), 1550);
    setTimeout(() => $('.hiw-content').removeClass('_hide'), 1600);
  
    $('.button-np').addClass('_hide');
    setTimeout(() => $('.button-np').removeClass('_hide'), 1600);

    $('#point_2_1').animate({opacity:0},600);
    $('#point_2_2').animate({opacity:0},1000);
    $('#point_2_3').animate({opacity:0},1400);
    $('#point_2_4').animate({opacity:0},1800);
    $('#point_2_5').animate({opacity:0},2150);
    $('#point_2_6').animate({opacity:0},2550);
    $('#point_2_7').animate({opacity:0},2900);
    $('#big_point_3').animate({opacity:0},3200);
   
    pointer_events();

  }

  if (n_click == 3) {

    $('.hiw-content').addClass('_hide');
    setTimeout(() => $('.three-step').css('display', 'none'), 1000);
    setTimeout(() => $('.four-step').css('display', 'block'), 1550);
    setTimeout(() => $('.hiw-content').removeClass('_hide'), 1600);
  
    $('.button-np').addClass('_hide');
    setTimeout(() => $('.next-step').css('display', 'none'), 1550);
    setTimeout(() => $('.button-np').removeClass('_hide'), 1600);

    $('#point_3_1').animate({opacity:0},600);
    $('#point_3_2').animate({opacity:0},1000);
    $('#point_3_3').animate({opacity:0},1400);
    $('#point_3_4').animate({opacity:0},1800);
    $('#point_3_5').animate({opacity:0},2150);
    $('#point_3_6').animate({opacity:0},2550);
    $('#point_3_7').animate({opacity:0},2900);
    $('#big_point_4').animate({opacity:0},3200);  
   
    pointer_events();
  }

  n_click++;

})

$('body').on('click', '.prev-step', function () {

  if (n_click == 4) {

    $('.hiw-content').addClass('_hide');
    setTimeout(() => $('.four-step').css('display', 'none'), 1000);
    setTimeout(() => $('.three-step').css('display', 'block'), 1550);
    setTimeout(() => $('.hiw-content').removeClass('_hide'), 1600);
  
    $('.button-np').addClass('_hide');
    setTimeout(() => $('.next-step').css('display', 'block'), 1550);
    setTimeout(() => $('.button-np').removeClass('_hide'), 1600);

    $('#point_3_1').animate({opacity:1},3200);
    $('#point_3_2').animate({opacity:1},2900);
    $('#point_3_3').animate({opacity:1},2550);
    $('#point_3_4').animate({opacity:1},2150);
    $('#point_3_5').animate({opacity:1},1800);
    $('#point_3_6').animate({opacity:1},1400);
    $('#point_3_7').animate({opacity:1},1000);
    $('#big_point_4').animate({opacity:1},600);

    pointer_events();
  }

  if (n_click == 3) {

    $('.hiw-content').addClass('_hide');
    setTimeout(() => $('.three-step').css('display', 'none'), 1000);
    setTimeout(() => $('.two-step').css('display', 'block'), 1550);
    setTimeout(() => $('.hiw-content').removeClass('_hide'), 1600);
  
    $('.button-np').addClass('_hide');
    setTimeout(() => $('.button-np').removeClass('_hide'), 1600);

    $('#point_2_1').animate({opacity:1},3200);
    $('#point_2_2').animate({opacity:1},2900);
    $('#point_2_3').animate({opacity:1},2550);
    $('#point_2_4').animate({opacity:1},2150);
    $('#point_2_5').animate({opacity:1},1800);
    $('#point_2_6').animate({opacity:1},1400);
    $('#point_2_7').animate({opacity:1},1000);
    $('#big_point_3').animate({opacity:1},600);
   
    pointer_events();
  }

  if (n_click == 2) {

    $('.hiw-content').addClass('_hide');
    setTimeout(() => $('.two-step').css('display', 'none'), 1000);
    setTimeout(() => $('.one-step').css('display', 'block'), 1550);
    setTimeout(() => $('.hiw-content').removeClass('_hide'), 1600);
  
    $('.button-np').addClass('_hide');
    setTimeout(() => $('.prev-step').css('display', 'none'), 1550);
    setTimeout(() => $('.button-np').removeClass('_hide'), 1600);
 
    $('#point_1').animate({opacity:1},3200);
    $('#point_2').animate({opacity:1},2900);
    $('#point_3').animate({opacity:1},2550);
    $('#point_4').animate({opacity:1},2150);
    $('#point_5').animate({opacity:1},1800);
    $('#point_6').animate({opacity:1},1400);
    $('#point_7').animate({opacity:1},1000);
    $('#big_point_2').animate({opacity:1},600);
   
    pointer_events();
  }

  n_click--;
})

//Animation OC


//Animate main on scroll
let check_oc_button = 0;

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('_active');
    } else if (!change.target.classList.contains('_no-anim-item-back')){
      change.target.classList.remove('_active');
    }

    if(change.target.classList.contains('oc-button-accept') && change.target.classList.contains('_active') && check_oc_button == 0) {
      $('.oc-button-accept').removeClass('_hide-end');
      $('.oc-button-accept').addClass('_show');
      $('.slick-arrow').css('pointer-events', 'none')
      //document.getElementsByClassName('oc-button-accept')[0].style.transform = "translate(0,0)";
      setTimeout(() => $('.oc-button-accept').removeClass('_show'), 2400);
      setTimeout(() =>  $('.slick-arrow').css('pointer-events', 'auto'), 2600);
      check_oc_button = 1;
    } else if (!change.target.classList.contains('oc-button-accept')) {
      check_oc_button = 0;
    }
    if(change.target.classList.contains('our_cars') && !change.target.classList.contains('_active')) {
      $('.oc-button-accept').addClass('_hide-end');
      
    }

  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('._anim-items');
for (let elm of elements) {
  observer.observe(elm);
}
