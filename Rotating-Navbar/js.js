let container = document.querySelector(".container");
let [close, open] = document.querySelectorAll("button");

open.addEventListener("click", () => {
  container.classList.add("show-nav");
});

close.addEventListener("click", () => {
  container.classList.remove("show-nav");
});
