var prevScrollpos = window.pageYOffset;

window.scroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("down-arrow").classList.toggle("hidden");
  }
};
