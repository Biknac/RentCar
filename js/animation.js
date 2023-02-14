//Animation OC

function ocba_up_left() {
   // document.getElementsByClassName('oc-button-accept')[0].style.transform = "translate(-160px,-82px)";
    $('.oc-button-accept').addClass('_hide-left'); 
    document.getElementsByClassName('oc-button-accept')[0].style.width = "50px";
    document.getElementsByClassName('slick-arrow')[0].style['pointer-events'] = "none";
    document.getElementsByClassName('slick-arrow')[1].style['pointer-events'] = "none";
  }

function ocba_up_right() {
  //  document.getElementsByClassName('oc-button-accept')[0].style.transform = "translate(160px,-82px)";
    $('.oc-button-accept').addClass('_hide-right'); 
    document.getElementsByClassName('oc-button-accept')[0].style.width = "50px";
    document.getElementsByClassName('slick-arrow')[0].style['pointer-events'] = "none";
    document.getElementsByClassName('slick-arrow')[1].style['pointer-events'] = "none";
  }

function ocba_start_mid(){
    document.getElementsByClassName('oc-button-accept')[0].style.display = "none";
    $('.oc-button-accept').addClass('_hide-start'); 
  //  document.getElementsByClassName('oc-button-accept')[0].style.transform = "translate(0,-82px)";
}
function ocba_end_mid(){
    document.getElementsByClassName('oc-button-accept')[0].style.display = "block";
    document.getElementsByClassName('oc-button-accept')[0].style.width = "295px";
}

function ocba_down() {
    //document.getElementsByClassName('oc-button-accept')[0].style.transform = "translate(0,80px)";
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

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {

      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top + 1
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    
  });

/*
  (function($) {
    $(function() {
    
        $('#up').click(function() {
            $('html, body').animate({scrollTop: 0},1000);
            return false;
        })
    
    })
    })(jQuery)

    let mybutton = document.getElementById("arrow-up");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }*/


    if(window.pageYOffset >= 754){
        document.getElementsByClassName('oc-button-accept').style.display = "none";
    }
    

    /*
    
     show() {
      // удалим у кнопки класс btn-up_hide
      document.getElementsByClassName('arrow-up').style.display = "block";
    },
    hide() {
      // добавим к кнопке класс btn-up_hide
      document.getElementsByClassName('arrow-up').style.display = "none";
    },
    addEventListener() {
      // при прокрутке содержимого страницы
      window.addEventListener('scroll', () => {
        // определяем величину прокрутки
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
        scrollY > 400 ? this.show() : this.hide();
      });

    */

      //const elementArrowUp = document.getElementById("arrow-up");
      const ArrowUp = {
   
        addEventListener() {
          // при прокрутке содержимого страницы
          window.addEventListener('scroll', () => {
            // определяем величину прокрутки
            const scrollX = window.scrollX || document.documentElement.scrollTop;
            // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
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
    // плавная анимация затухания первого слайда и кнопки next | плавное появление второго слайда | плавное появление кнопки prev и кнопки next  

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
/*
$('.slick-arrow.slick-prev').hover(
  function () {
    $(this).css('display', 'none')
  }, 
  function () {
  
  }
);
*/
//oc-button-accept
/*
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
    if(change.target.classList.contains('oc-button-accept'))
    {
      $('.oc-button-accept').addClass('._hide');
      setTimeout(() => $('.oc-button-acceptt').removeClass('._hide'), 1500);
    }
  }
  });

}
*/

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
      setTimeout(() => $('.oc-button-accept').removeClass('_show'), 2400);
      setTimeout(() =>  $('.slick-arrow').css('pointer-events', 'auto'), 2600);
      check_oc_button = 1;
    } 
   
    if(change.target.classList.contains('our_cars') && !change.target.classList.contains('_active')) {
      $('.oc-button-accept').addClass('_hide-end');
      check_oc_button = 0;
    }
     
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('._anim-items');
for (let elm of elements) {
  observer.observe(elm);
}


/*
const animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0){
  window.addEventListener('scroll', animOnSroll);
  function animOnSroll(){
    for (let index = 0; index < animItems.length; index++){
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else if (!animItem.classList.contains('_no-anim-item-back')){
          animItem.classList.remove('_active');
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }

}

setTimeout(() => {
  animOnSroll();
}, 300);
*/


/*
    jQuery(document).ready(function($){
    
        $('<style>'+
            '.scrollTop{ display:none; z-index:999; position:fixed;'+
                'bottom:20px; right: 25px; width:40px; height:40px;'+
                'background:url(../assets/arrow-up.png) 0 0 no-repeat; }' +
            '.scrollTop:hover{ background-position:0 -40px;}'
        +'</style>').appendTo('body');
        let
        speed = 550,
        $scrollTop = $('<a href="pageUp" class="scrollTop">').appendTo('body');      
        $scrollTop.click(function(e){
            e.preventDefault();
            $( 'html:not(:animated),body:not(:animated)' ).animate({ scrollTop: 0}, speed );
        });
    
        //появление
        function show_scrollTop(){
            ( $(window).scrollTop() > 330 ) ? $scrollTop.fadeIn(700) : $scrollTop.fadeOut(700);
        }
        $(window).scroll( function(){ show_scrollTop(); } );
        show_scrollTop();
    });

*/
/*const move_slide_button = document.querySelectorAll(".oc-button-accept");

move_slide_button.addEventListener('click', function(){
    alert(move_slide_button);
  });


  document.querySelectorAll(".oc-button-accept").click( function(){
    var name = $(this).attr("id");
    console.log( name );
});

const button = document.querySelector('.form-submit-button');

button.addEventListener('click', function() {
    console.log(this.className);
    this.classList.toggle('form-submit-button');
})
*/
/*
const button = document.querySelector('.slick-arrow');


button.addEventListener('click', function() {
    alert("click_handler2");
})
*/

/*
const ocba = document.querySelector('.oc-button-accept'); 
const styles = window.getComputedStyle(ocba);*/

    //alert('click working')

    //document.getElementsByClassName('oc-button-accept')[0].style.transform = "translate(0,-60px)";
   /* if (styles.display == 'block') {
        document.getElementsByClassName('oc-button-accept')[0].style.display = "none";
    }*/
   //setTimeout(document.getElementsByClassName('oc-button-accept')[0].style.display = "none", 0);
   //setTimeout(document.getElementsByClassName('oc-button-accept')[0].style.transform = "translate(0,0px)", 5000);
   //transform: translate(0,-40px);
