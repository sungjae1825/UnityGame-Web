const firstH1 = document.querySelector(".first-main-contents h1");
const firstP = document.querySelector(".first-main-contents p");

const secondH1 = document.querySelector(".second-main-contents h1");
const secondP = document.querySelector(".second-main-contents p");

const thirdH1 = document.querySelectorAll(".third-main-contents-wrapper h1");

const fourthH1 = document.querySelector(".fourth-main-contents-wrapper h1");
const fourthP = document.querySelector(".fourth-main-contents-wrapper p");

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  console.log(scrollTop);
  if (scrollTop > 500) {
    firstH1.classList.add("hide");
    firstP.classList.add("hide");
  } else {
    firstH1.classList.remove("hide");
    firstP.classList.remove("hide");
  }
  if (scrollTop < 50 || scrollTop > 1100) {
    secondH1.classList.add("hide");
    secondP.classList.add("hide");
  } else {
    secondH1.classList.remove("hide");
    secondP.classList.remove("hide");
  }
  if (scrollTop < 570) {
    thirdH1[0].classList.add("hide");
    thirdH1[1].classList.add("hide");
  } else {
    thirdH1[0].classList.remove("hide");
    thirdH1[1].classList.remove("hide");
  }
  if (scrollTop < 710) {
    fourthH1.classList.add("hide");
    fourthP.classList.add("hide");
  } else {
    fourthH1.classList.remove("hide");
    fourthP.classList.remove("hide");
  }
});
