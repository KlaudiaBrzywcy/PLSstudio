const tnslider = tns({
  container: ".my-slider",
  slideBy: 1,
  speed: 700,
  navPosition: "bottom",
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayButtonOutput: false,
  controlsContainer: "#controls",
  prevButton: ".prev",
  nextButton: ".next",
});

// ***shadow box***
const sectionTwo = document.querySelector(".section2");
const sectionTwoPicture = document.querySelectorAll("sec2-pic-container img");
const sectionTwoBtn = document.getElementsByClassName(".sec2-btn");
const shadowBox = document.querySelector(".shadow-box");
const closeBox = document.querySelector(".icon-x");

const shadowH3 = document.querySelector(".shadow-h3");
const smallPicContainer = document.querySelector(".small-pic-container");
const currentPicture = document.querySelector("#current");
const smallPictures = document.querySelectorAll(".small-pic");

const toggleShadowBox = (value) => {
  shadowBox.style.display = value;
};

const clickChecker = (e) => {
  if (e.target.matches(".sec2-btn") || e.target.matches("img")) {
    toggleShadowBox("block");
    let txt = e.target.previousElementSibling || e.target;

    if (e.target.previousElementSibling === null) {
      let msg = txt.alt;
      shadowH3.textContent = msg;
    } else {
      let msg = txt.firstChild.nextElementSibling.textContent;
      shadowH3.textContent = msg;
    }
  }
};

const shadowClickChecker = (e) => {
  console.log(e.target);
  if (e.target.matches(".small-pic")) {
    currentPicture.src = e.target.src;
    smallPictures.forEach((picture) => (picture.style.border = "none"));
    e.target.style.border = " 4px solid #EB8B76";
  }
};

sectionTwo.addEventListener("click", clickChecker);
closeBox.addEventListener("click", () => toggleShadowBox("none"));
shadowBox.addEventListener("click", shadowClickChecker);
