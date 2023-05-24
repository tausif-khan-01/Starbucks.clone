// Navi gation Maenu
let hamburgerButtonSvg = document.querySelector("#hamburgerButtonSvg");
let crossIcon = document.querySelector(" #crossIcon");
let hamburgerMenu = document.querySelector("#hamburgerMenu");
let hamburgerMenuWrapper = document.querySelector("#hamburgerMenuWrapper");

hamburgerButtonSvg.addEventListener("click", function () {
  hamburgerMenuWrapper.style.display = "flex";
  hamburgerMenu.style.display = "block";
  hamburgerMenu.classList.add("slideIn");
  hamburgerButtonSvg.style.display = "none";
  crossIcon.style.display = "block";
  setTimeout(() => {
    hamburgerMenu.classList.remove("slideIn");
  }, 200);
});
crossIcon.addEventListener("click", function () {
  hamburgerMenu.classList.add("slideOut");
  setTimeout(() => {
    hamburgerMenu.style.display = "none";
    hamburgerButtonSvg.style.display = "block";
    crossIcon.style.display = "none";
    hamburgerMenu.classList.remove("slideOut");
    hamburgerMenuWrapper.style.display = "none";
  }, 200);
});

let Menu = document.querySelector("#Menu");
let menuLinksWrapper = document.querySelector("#menuLinksWrapper");

Menu.addEventListener("click", function () {
  menuLinksWrapper.style.display = "flex";
  menuLinksWrapper.classList.add("slideIn");
});

let Menu2 = document.querySelector("#Menu2");
Menu2.addEventListener("click", function () {
  menuLinksWrapper.classList.add("slideOut");
  setTimeout(() => {
    menuLinksWrapper.style.display = "none";
    menuLinksWrapper.classList.remove("slideOut");
  }, 200);
});

let side = document.querySelector("#side");
side.addEventListener("click", function () {
  hamburgerMenu.classList.add("slideOut");
  setTimeout(() => {
    hamburgerMenu.style.display = "none";
    hamburgerButtonSvg.style.display = "block";
    crossIcon.style.display = "none";
    hamburgerMenu.classList.remove("slideOut");
    hamburgerMenuWrapper.style.display = "none";
  }, 200);
});

let linkContainer = document.getElementsByClassName("linkContainer");
let footerLinkHeader = document.getElementsByClassName("footerLinkHeader");


  footerLinkHeader[0].addEventListener("click", () => {
    linkContainer[0].classList.toggle("height");
    // linkContainer[0].style.height = "auto";
  });
  
  footerLinkHeader[1].addEventListener("click", () => {
    linkContainer[1].classList.toggle("height");
  });
  
  footerLinkHeader[2].addEventListener("click", () => {
    linkContainer[2].classList.toggle("height");
  });
  
  footerLinkHeader[3].addEventListener("click", () => {
    linkContainer[3].classList.toggle("height");
  });
  footerLinkHeader[4].addEventListener("click", () => {
    linkContainer[4].classList.toggle("height");
  });
  


