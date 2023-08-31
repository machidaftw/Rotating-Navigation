const open = document.getElementById("open");
const close = document.getElementById("close");
const menu = document.querySelector(".menu");
const content = document.querySelector(".content");

open.addEventListener(
  "click",
  () => menu.classList.add("showNav") & content.classList.add("showNav")
);

close.addEventListener(
  "click",
  () => menu.classList.remove("showNav") & content.classList.remove("showNav")
);
