const about = document.querySelectorAll(".nav-items li a");
const last = about[about.length - 1];
const items = document.querySelectorAll(".nav-items");
const mobile = document.querySelector(".mobile");
const all = document.querySelector(".all");
const foot = document.querySelector("footer");

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

last.style.color = "black";
