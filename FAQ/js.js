let flags = document.querySelectorAll(".flag");
let items = document.querySelectorAll(".item");

// adding active class to the items
items.forEach((item) => {
  item.addEventListener("click", () => {
    item.children[1].classList.contains("active")
      ? item.classList.add("active")
      : item.classList.remove("active");
  });
});

flags.forEach((flag) => {
  flag.addEventListener("click", () => {
    flag.classList.contains("fa-chevron-down") ? open(flag) : close(flag);
  });
});

function open(flag) {
  flag.classList.remove("fa-chevron-down");
  flag.classList.add("fa-times", "active");
}

function close(flag) {
  flag.classList.remove("fa-times", "active");
  flag.classList.add("fa-chevron-down");
}
