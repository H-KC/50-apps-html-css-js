let btn = document.querySelector(".btn");
let container = document.querySelector(".search");
btn.addEventListener("click", () => {
  container.classList.toggle("active");
  console.log("ok");
});
