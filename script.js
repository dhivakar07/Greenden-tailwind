//Add to Cart
function addtocart(event) {
  event.target.textContent = "Added";
}
//Side Navbar
const sidenav = document.getElementById("sidenav");
const close = document.getElementById("closenav");
const menuicon = document.getElementById("menuicon");

menuicon.addEventListener("click", function () {
  sidenav.style.right = 0;
});
close.addEventListener("click", function () {
  sidenav.style.right = "-30%";
});
//Search Products
const search = document.getElementById("search");
const productcontainer = document.getElementById("product-container");
const productslist = productcontainer.querySelectorAll("div");

search.addEventListener("keyup", function (event) {
  const enteredValue = event.target.value.toUpperCase();

  for (let i = 0; i < productslist.length; i++) {
    const productHeading = productslist[i].querySelector("h1");
    if (productHeading) {
      const productName = productHeading.textContent.toUpperCase();
      if (productName.indexOf(enteredValue) < 0) {
        productslist[i].style.display = "none";
      } else {
        productslist[i].style.display = "block";
      }
    }
  }
});
