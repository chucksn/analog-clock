const secondsStick = document.querySelector(".seconds-stick");
const minuteStick = document.querySelector(".minute-stick");
const hourStick = document.querySelector(".hour-stick");
let secStickMove = 0;
let minStickMove = 0;
let hrStickMove = 0;

setInterval(() => {
  // seconds stick movement
  if (secStickMove < 354) {
    secStickMove += 6;
  } else {
    secStickMove = 0;
  }

  secondsStick.style.transform = `rotate(${secStickMove}deg)`;

  //minute and hour stick movement
  if (secStickMove == 0) {
    if (minStickMove < 354) {
      minStickMove += 6;
    } else {
      minStickMove = 0;
    }
    minuteStick.style.transform = `rotate(${minStickMove}deg)`;

    if (hrStickMove < 354) {
      hrStickMove += 0.5;
    } else {
      hrStickMove = 0;
    }
    hourStick.style.transform = `rotate(${hrStickMove}deg)`;
  }
}, 1000);

//event on clock adjust and setting buttons
let settings = document.querySelector(".clock-setting-container");

let settingEventFunc = (e) => {
  if (e.target.classList.contains("adjust-clockwise")) {
    if (minStickMove < 354) {
      minStickMove += 6;
    } else {
      minStickMove = 0;
    }
    minuteStick.style.transform = `rotate(${minStickMove}deg)`;
    if (hrStickMove < 354) {
      hrStickMove += 0.5;
    } else {
      hrStickMove = 0;
    }
    hourStick.style.transform = `rotate(${hrStickMove}deg)`;
  }

  if (e.target.classList.contains("adjust-anticlockwise")) {
    if (minStickMove < 354) {
      minStickMove -= 6;
    } else {
      minStickMove = 0;
    }
    minuteStick.style.transform = `rotate(${minStickMove}deg)`;
    if (hrStickMove < 354) {
      hrStickMove -= 0.5;
    } else {
      hrStickMove = 0;
    }
    hourStick.style.transform = `rotate(${hrStickMove}deg)`;
  }

  if (e.target.classList.contains("adjust-done")) {
    settings.style.display = "none";
    adjust.style.display = "flex";
  }
};

settings.addEventListener("click", settingEventFunc);

let adjust = document.querySelector(".clock-adjust-container");
adjust.addEventListener("click", (e) => {
  if (e.target.classList.contains("adjust-clock")) {
    adjust.style.display = "none";
    settings.style.display = "flex";
  }
});
