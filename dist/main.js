const close = document.getElementById("close");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const navbar = document.getElementById("navbar");

menu.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  navbar.classList.remove("max-laptop:hidden");
});

close.addEventListener("click", () => {
  navbar.classList.add("max-laptop:hidden");
  overlay.classList.add("hidden");
});
