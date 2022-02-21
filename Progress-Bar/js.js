let progressBar = document.querySelector(".progress");
let steps = document.querySelectorAll(".circle");
let [prevBtn, nextBtn] = document.querySelectorAll(".btn");

//the current step
let currentStep = 0;

// next button action
nextBtn.addEventListener("click", () => {
  currentStep++;
  steps[currentStep].classList.add("active");
  progressBar.style.width = `${currentStep * 33}%`;
  toggler(currentStep);
});

// prev button action
prevBtn.addEventListener("click", () => {
  steps[currentStep].classList.remove("active");
  currentStep--;
  progressBar.style.width = `${currentStep * 33}%`;

  toggler(currentStep);
});
// to disable and enable nex || prev buttons
let toggler = (currentStep) => {
  prevBtn.disabled = currentStep > 0 ? false : true;
  nextBtn.disabled = currentStep < 3 ? false : true;
};
