var preloader = document.getElementById("overlay");
var main = document.getElementById("main");
		// window.addEventListener('load', function(){
		// 	preloader.style.display = 'none';
		// 	})

		function myFunction(){
            preloader.style.display = 'none';
            main.style.display = 'initial';
		};





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



