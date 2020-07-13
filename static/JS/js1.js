let text = document.querySelector(".container h1");
const text1 = document.querySelector(".projects h1");
const slide = document.querySelector(".carousel-slides");
const images = document.querySelectorAll(".carousel-slides img");
const mobile = document.querySelector(".mobile");
const items = document.querySelectorAll(".nav-items");
const pro = document.querySelector(".nav-items li a");
const prev = document.querySelector(".image12");
const next = document.querySelector(".image22");
const dot = document.querySelector(".circle1");
const dot1 = document.querySelector(".circle2");
const all = document.querySelector(".all");
const foot = document.querySelector("footer");
var x = window.matchMedia("(max-width: 338px)")

pro.style.color = "black";

if (x.matches) {
  for (let a = 0; a < images.length; a++) {
    images[0].style.marginTop = "50px";
    images[1].style.position = "absolute";
    images[1].style.left = "-60px";
    images[2].style.position = "absolute";
    images[2].style.marginLeft = "0px";
    images[1].style.top = "200px";
    images[0].style.marginLeft = "0px";
    images[a].style.width = "200px";
    images[a].style.height = "120px";
  }
}

mobile.addEventListener("click", () => {
  if (items[0].style.visibility == "hidden") {
    items[0].style.visibility = "visible";
    all.style.transform = "translateY(" + (334) + "px)";
    foot.style.transform = "translateY(" + (334) + "px)";
  }
  else if (items[0].style.visibility = "visible") {
    items[0].style.visibility = "hidden";
    all.style.transform = "translateY(" + (0) + "px)";
    foot.style.transform = "translateY(" + (0) + "px)";
  }
});


next.addEventListener("click", () => {
  slide.style.transition = "0.5s ease-in-out";
  dot.style.transition = "0.5s ease-in-out";
  dot1.style.transition = "0.5s ease-in-out";
  dot.style.backgroundColor = "#B1A6A4";
  dot1.style.backgroundColor = "#413F3D";
  text1.textContent = "Python Projects"
  if (x.matches) {
    slide.style.transform = "translateX(" + (-200) + "px)";
  }
  else {
    slide.style.transform = "translateX(" + (-1150) + "px)";
  }
});

prev.addEventListener("click", () => {
  slide.style.transition = "0.5s ease-in-out";
  slide.style.transform = "translateX(" + (0) + "px)";
  dot.style.transition = "0.5s ease-in-out";
  dot1.style.transition = "0.5s ease-in-out";
  dot1.style.backgroundColor = "#B1A6A4";
  dot.style.backgroundColor = "#413F3D";
  text1.textContent = "Javascript Projects"
});





