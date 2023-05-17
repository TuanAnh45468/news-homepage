const close = document.getElementById("close");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const navbar = document.getElementById("navbar");

menu.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  navbar.classList.remove("hidden");
});

close.addEventListener("click", () => {
  navbar.classList.add("hidden");
  overlay.classList.add("hidden");
});
