window.addEventListener("DOMContentLoaded", function () {
  //slider
  //#region
  let slideIndex = 1; // номер слайда какой показываем
  let slides = document.querySelectorAll(".slider-item"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    sliderDotsContainer = document.querySelector(".slider-dots"),
    sliderDots = document.querySelectorAll(".dot");

  function showSlides(slide) {
    if (slide > slides.length) {
      slideIndex = 1;
    }
    if (slideIndex < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((item) => (item.style.display = "none"));
    sliderDots.forEach((item) => item.classList.remove("dot-active"));

    slides[slideIndex - 1].style.display = "block";
    sliderDots[slideIndex - 1].classList.add("dot-active");
  }
  showSlides(slideIndex);

  function plusSlide(index) {
    showSlides((slideIndex += index));
  }

  prev.addEventListener("click", function () {
    plusSlide(-1);
  });
  next.addEventListener("click", function () {
    plusSlide(1);
  });

  sliderDotsContainer.addEventListener("click", function (event) {
    for (let i = 0; i < sliderDots.length + 1; i++) {
      if (
        event.target.classList.contains("dot") &&
        event.target == sliderDots[i - 1]
      ) {
        showSlides((slideIndex = i));
      }
    }
  });
  //#endregion
});
