function logScrollAmount() {
  const th = 718;
  const scrollTopAmount =
    document.documentElement.scrollTop || document.body.scrollTop;

  const navbar = document.querySelector(".navbar");
  const liElements = document.querySelectorAll(".navbar .nav-links ul li a");
  if (navbar) {
    if (scrollTopAmount >= th) {
      navbar.classList.remove("bg-transparent");
      navbar.classList.add("bg-white");
      navbar.style.color = "black";
      liElements.forEach((li) => {
        li.style.color = "black";
      });
    } else {
      navbar.classList.remove("bg-white");
      navbar.classList.add("bg-transparent");
      navbar.style.color = "white";
      liElements.forEach((li) => {
        li.style.color = "white";
      });
    }
  }
}

window.addEventListener("scroll", logScrollAmount);

window.addEventListener("scroll", function () {
  var element = document.querySelector(".fullscreen");
  var position = element.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  // If the element is in the viewport
  if (position < screenHeight) {
    element.classList.add("fade-animation");
  }
});

document.querySelector(".sliders").addEventListener("scroll", function () {
  console.log(this.scrollLeft);
});

document.querySelector(".right-arrow").addEventListener("click", function () {
  const offset = 1230;
  console.log("right-arrow-clicked");
  const slidersElement = document.querySelector(".sliders");
  maxScroll = slidersElement.scrollWidth;
  if (slidersElement.scrollLeft + offset < maxScroll) {
    slidersElement.scrollTo({
      left: slidersElement.scrollLeft + offset,
      behavior: "smooth",
    });
  }

});

document.querySelector(".left-arrow").addEventListener("click", function () {
  const offset = 1230;
  console.log("left-arrow-clicked");
  const slidersElement = document.querySelector(".sliders");
  maxScroll = slidersElement.scrollWidth;
  if (slidersElement.scrollLeft - offset > -1200) {
    slidersElement.scrollTo({
      left: slidersElement.scrollLeft - offset,
      behavior: "smooth",
    });
  }

});
