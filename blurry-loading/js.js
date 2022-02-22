let bg = document.querySelector(".bg");
let text = document.querySelector(".loading-text");
let counter = 0;

let loader = setInterval(blurring, 30);
function blurring() {
  counter++;
  text.innerText = `${counter}%`;
  text.style.opacity = 1 - counter / 100;
  bg.style.filter = `blur(${30 - 0.3 * counter}px)`;
  counter > 99 && clearInterval(loader);
}
