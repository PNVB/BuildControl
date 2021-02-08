// init controller
var controller = new ScrollMagic.Controller();

// // create a scene
// new ScrollMagic.Scene({
// })
//     .setPin('#header') // pins the element for the the scene's duration
//     .setClassToggle("#header", "sticked") // add class toggle
//     .addTo(controller); // assign the scene to the controller

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

// // build scene
// var scene = new ScrollMagic.Scene({triggerElement: "a#top", duration: 200, triggerHook: "onLeave"})
//                 .setTween(tween)
//                 .addIndicators() // add indicators (requires plugin)
//                 .addTo(controller);

// change behaviour of controller to animate scroll instead of jump
controller.scrollTo(function (newpos) {
    TweenMax.to(window, 0.5, {scrollTo: {y: newpos - 120}});
});

//  bind scroll to anchor links
$(document).on("click", "a[href^='#']", function (e) {
    var id = $(this).attr("href");
    if ($(id).length > 0) {
        e.preventDefault();

        // trigger scroll
        controller.scrollTo(id);
        // window.scrollBy(0,-100);

        // if supported by the browser we can even update the URL.
        if (window.history && window.history.pushState) {
            history.pushState("", document.title, id);
        }
    }
});