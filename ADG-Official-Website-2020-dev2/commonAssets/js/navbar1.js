var burger = document.getElementById("burger");
var menu = document.getElementById("menu");
var mobileAdgLogo = document.getElementById("mobile-adg-logo");

burger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  mobileAdgLogo.classList.toggle("hidden");
});
