const toggleOn = document.querySelector(".toggleOn");
const mouth = document.querySelector(".mouth");
const eyesLeft = document.querySelector(".eyes.left");
const eyesRight = document.querySelector(".eyes.right");
const robotArmLeft = document.querySelector(".robot-arm.left");
const robotArmRight = document.querySelector(".robot-arm.right");
const textWrapper = document.querySelector(".message .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
const squareBg = document.querySelector(".square-bg");
const namesLeft = document.querySelector(".namesLeft");
const namesRight = document.querySelector(".namesRight");

squareBg.style.display = "none";
textWrapper.style.display = "none";
namesLeft.style.display = "none";
namesRight.style.display = "none";

toggleOn.addEventListener("click", function () {
  squareBg.style.display = "";
  mouth.style.animationPlayState = "running";
  eyesLeft.style.animationPlayState = "running";
  eyesRight.style.animationPlayState = "running";
  robotArmLeft.style.animationPlayState = "running";
  robotArmRight.style.animationPlayState = "running";

  textWrapper.style.display = "";

  anime
    .timeline({ loop: true })
    .add({
      targets: ".message .letter",
      scale: [0, 1],
      duration: 1500,
      elasticity: 600,
      delay: (el, i) => 45 * (i + 1),
    })
    .add({
      targets: ".message",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });

  namesLeft.style.display = "";
  namesRight.style.display = "";

  const items = document.getElementsByClassName("fade-item");

  for (let i = 0; i < items.length; i++) {
    fadeIn(items[i], i * 1000);
  }

  function fadeIn(item, delay) {
    setTimeout(function () {
      item.classList.add("fadein");
    }, delay);
  }
});
