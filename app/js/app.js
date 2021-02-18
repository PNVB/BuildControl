// init controller
var controller = new ScrollMagic.Controller();

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticked");
  } else {
    header.classList.remove("sticked");
  }
}


// build tween
var tween = gsap.from("#animate", 0.5, {autoAlpha: 0, scale: 0.7});

// change behaviour of controller to animate scroll instead of jump
controller.scrollTo(function (newpos) {
    TweenMax.to(window, 0.5, {scrollTo: {y: newpos -60}}); //-120
});

$(document).on("click", "a[href^='#']", function (e) {
          if ($(".hamburger").hasClass("is-active")) {
            $(".hamburger").click();
        };
});

$(document).on("click", "a[href^='#']", function() {

  let href = $(this).attr('href');

  $('html, body').animate({
      scrollTop: $(href).offset().top - 100
    },
      'smooth'
  );

  return false;
});

window.addEventListener("scroll", () => {
  let button = $(".hamburger");
  if (button.hasClass("is-active")) {
    $("#menuWrapper")[0].style.display = "none";
    button[0].classList.toggle("is-active");
  }
});

$(".hamburger").on("click", (event) => {
  event.currentTarget.classList.toggle("is-active");
  let menu = $("#menuWrapper");
  menu[0].style.top = (window.pageYOffset+50) + "px";
  menu.slideToggle();
})