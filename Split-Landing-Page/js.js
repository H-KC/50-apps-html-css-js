let sides = document.querySelectorAll(".split");

sides.forEach((side) => {
  side.addEventListener("mouseenter", () => {
    side.classList.add("active");
  });
  side.addEventListener("mouseleave", () => {
    side.classList.remove("active");
  });
});
