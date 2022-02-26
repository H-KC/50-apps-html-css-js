let textArea = document.querySelector("textarea");
let tags = document.querySelector(".tags");

textArea.addEventListener("keyup", (elt) => {
  let holder = elt.target.value.split(",");
  tags.innerHTML = "";
  holder.forEach((tag) => {
    if (tag.trim() !== "") {
      tags.innerHTML += `<span class="tag">${tag.trim()} </span>`;
    }
  });
  if (elt.key === "Enter") {
    elt.target.value.trim() === ""
      ? alert("Please Enter Choices")
      : randomChoice();
    elt.target.value = "";
  }
});

function randomChoice() {
  let tags = document.querySelectorAll(".tag");
  let interval = setInterval(() => {
    let randomTag = tags[Math.floor(Math.random() * tags.length)];
    heighlight(randomTag);
    setTimeout(() => {
      unHeighlight(randomTag);
    }, 100);
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      let randomTag = tags[Math.floor(Math.random() * tags.length)];
      heighlight(randomTag);
    }, 100);
  }, 3000);
}

function heighlight(tag) {
  tag.classList.add("heighlighted");
}
function unHeighlight(tag) {
  tag.classList.remove("heighlighted");
}
