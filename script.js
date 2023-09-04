const open = document.getElementById("open");
const close = document.getElementById("close");
const menu = document.querySelector(".menu");
const content = document.querySelector(".content");
const navigation = document.querySelector("nav");

open.addEventListener(
  "click",
  () => {
    menu.classList.add("showNav");
    content.classList.add("showNav");
    navigation.style.display = "block";
  }
);

close.addEventListener(
  "click",
  () => {
    menu.classList.remove("showNav");
    content.classList.remove("showNav");
    navigation.style.display = "none";
  }
);
