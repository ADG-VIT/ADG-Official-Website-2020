function classToggle() {
  const navs = document.querySelectorAll(".nav-links");

  navs.forEach(nav => nav.classList.toggle("Navbar__ToggleShow"));
}

document.querySelector(".burger").addEventListener("click", classToggle);
