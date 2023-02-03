const imgs = document.querySelectorAll(".containerSlider img");

const next = document.querySelector(".right");
const previous = document.querySelector(".left");

const switchButton = document.querySelectorAll(".switchButton");

let index = 0;

next.addEventListener("click", nextSlide);

function nextSlide() {
  if (index < 2) {
    imgs[index].classList.remove("on");
    index++;
    imgs[index].classList.add("on");
  } else if (index === 2) {
    imgs[index].classList.remove("on");
    index = 0;
    imgs[index].classList.add("on");
  }

  for (i = 0; i < switchButton.length; i++) {
    if (switchButton[i].getAttribute("data-click") - 1 === index) {
      switchButton[i].classList.add("onBtn");
    } else {
      switchButton[i].classList.remove("onBtn");
    }
  }
}

previous.addEventListener("click", previousSlide);

function previousSlide() {
  if (index > 0) {
    imgs[index].classList.remove("on");
    index--;
    imgs[index].classList.add("on");
  } else if (index === 0) {
    imgs[index].classList.remove("on");
    index = 2;
    imgs[index].classList.add("on");
  }
  for (i = 0; i < switchButton.length; i++) {
    if (switchButton[i].getAttribute("data-click") - 1 === index) {
      switchButton[i].classList.add("onBtn");
    } else {
      switchButton[i].classList.remove("onBtn");
    }
  }
}

switchButton.forEach((button) => {
  button.addEventListener("click", function () {
    for (i = 0; i < switchButton.length; i++) {
      switchButton[i].classList.remove("onBtn");
    }

    this.classList.add("onBtn");

    imgs[index].classList.remove("on");
    index = this.getAttribute("data-click") - 1;
    imgs[index].classList.add("on");
  });
});
