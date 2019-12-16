const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link,index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.5}s`;
            }
        });

    burger.classList.toggle('toggle');
    });
}
navSlide();



//Animation
var tl = new TimelineMax();
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
var tl4 = new TimelineMax();
var tl5 = new TimelineMax();
var tl6 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from('.txt', 2, {opacity: 0, fontSize: 0});
// tl2.from('#apple', 1, {opacity: 0, fontSize: 0 });
tl3.fromTo('#top', 1.5, {y:-100, opacity: 0}, {y:0, opacity: 1});
tl3.from('#bottom', 1.5, {y:-100, opacity: 0},{y:0, opacity: 1});
// tl5.from('#about', 0.5, {opacity: 0, fontSize: 0 });
// tl6.from('#desc', 1, {opacity: 0});
tl4.from('#left', 0.5, {x:-200, opacity: 0}, {x:0, opacity: 1});
tl4.from('#center', 0.5, {y:-100, opacity: 0}, {y:0, opacity: 1});
tl4.from('#right', 0.5, {x:200, opacity: 0}), {x:0, opacity: 1};



const scene = new ScrollMagic.Scene({
    triggerElement: ".one"
  })
    .setTween(tl)
          .addTo(controller);

// const scene2 = new ScrollMagic.Scene({
//     triggerElement: ".two"
// })
//     .setTween(tl2)
//         .addTo(controller);  

const scene3 = new ScrollMagic.Scene({
    triggerElement: ".column"
})
    .setTween(tl3)
        .addTo(controller);    
        
        
// const scene4 = new ScrollMagic.Scene({
//     triggerElement: ".three"
// })
//     .setTween(tl5)
//         .addTo(controller);


// const scene6 = new ScrollMagic.Scene({
//     triggerElement: "#about"
// })
//     .setTween(tl6)
//         .addTo(controller);     
    
const scene5 = new ScrollMagic.Scene({
    triggerElement: ".column2"
})
    .setTween(tl4)
        .addTo(controller);          
