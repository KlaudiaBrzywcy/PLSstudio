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
const smallPictures = document.getElementsByClassName("small-pic");

const toggleShadowBox = (value) => {
  shadowBox.style.display = value;
};

// let pictureProt = e.target.parentElement.previousElementSibling.firstChild;
// let picture = pictureProt.nextElementSibling || e.target;
// console.log(picture);
// currentPicture.src = picture.src;

// console.log(smallPictures[i].alt);
// if (e.target === smallPictures[i]) {
//   currentPicture.src = e.target.src;
//   // smallPictures.forEach((img) => (img.style.border = "none"));
//   // e.target.style.border = " 4px solid #EB8B76";
// }

// const a = () => {
//   for (let i = 0; i < smallPictures.length; i++) {
//     smallPictures[i].src = picture.src.replace(
//        "0.jpg",
//         `${smallPictures[i].alt}.jpg`
//         );
//       }
// };

// ||
//       e.target.parentElement.previousElementSibling === undefined

// smallPictures[i].src = currentPicture.src.replace(
//   "0.jpg",
//   `${smallPictures[i].alt}.jpg`
// );

const clickChecker = (e) => {
  if (e.target.matches(".sec2-btn") || e.target.matches("img")) {
    toggleShadowBox("block");
  }

  let txt = e.target.previousElementSibling || e.target;

  if (e.target.previousElementSibling === null) {
    let msg = txt.alt;
    shadowH3.textContent = msg;
    let picture = e.target;
    currentPicture.src = picture.src;
    // console.log(currentPicture.src);
    const path = currentPicture.src.slice(0, -5);

    for (let i = 0; i < smallPictures.length; i++) {
      smallPictures[i].src = `${path}${smallPictures[i].id}.jpg`;
    }
  } else {
    let msg = txt.firstChild.nextElementSibling.textContent;
    shadowH3.textContent = msg;
    let picture =
      e.target.parentElement.previousElementSibling.firstChild
        .nextElementSibling;
    currentPicture.src = picture.src;
    const path = currentPicture.src.slice(0, -5);

    for (let i = 0; i < smallPictures.length; i++) {
      smallPictures[i].src = `${path}${smallPictures[i].id}.jpg`;
    }
  }
};

const shadowFrameSmallPick = (e) => {
  if (e.target.matches(".small-pic")) {
    for (let i = 0; i < smallPictures.length; i++) {
      smallPictures[i].style.border = "none";
    }
    e.target.style.border = " 4px solid #EB8B76";
  } else if (e.target.matches(".fa-solid ")) {
    smallPictures[0].style.border = " 4px solid #EB8B76";
    for (let i = 1; i < smallPictures.length; i++) {
      smallPictures[i].style.border = "none";
    }
  }
};

sectionTwo.addEventListener("click", clickChecker);
closeBox.addEventListener("click", () => toggleShadowBox("none"));
shadowBox.addEventListener("click", shadowFrameSmallPick);
