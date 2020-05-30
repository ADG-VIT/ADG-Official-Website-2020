var burger = document.getElementById("burger");
var menu = document.getElementById("menu");
var mobileAdgLogo = document.getElementById("mobile-adg-logo");

burger.addEventListener("click", () => {
  $("#menu").slideToggle("medium");
  menu.classList.toggle("hidden");
 
  burger.classList.toggle('toggle');
});

