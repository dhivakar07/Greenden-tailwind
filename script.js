function addtocart(event) {
  event.target.textContent = "Added";
}
const sidenav = document.getElementById("sidenav");
const close = document.getElementById("closenav");
const menuicon = document.getElementById("menuicon");

menuicon.addEventListener("click", function () {
  sidenav.style.right = 0;
});
close.addEventListener("click", function () {
  sidenav.style.right = "-30%";
});
