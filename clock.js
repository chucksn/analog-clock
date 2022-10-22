const secondsStick = document.querySelector(".seconds-stick");
const minuteStick = document.querySelector(".minute-stick");
const hourStick = document.querySelector(".hour-stick");
const todaysDate = new Date();
let h = todaysDate.getHours();
let m = todaysDate.getMinutes();
let s = todaysDate.getSeconds();
let secStickMove = 0;
let minStickMove = 0;
let hrStickMove = 0;
let clicked = false;

setInterval(() => {
  // seconds stick movement
  if (secStickMove < 354) {
    secStickMove += 6;
  } else {
    secStickMove = 0;
  }

  secondsStick.style.transform = `rotate(${secStickMove}deg)`;

  //minute and hour stick movement
  if (secStickMove == 0 || clicked) {
    if (minStickMove < 354) {
      minStickMove += 6;
    } else {
      minStickMove = 0;
    }
    minuteStick.style.transform = `rotate(${minStickMove}deg)`;
    clicked = false;

    if (hrStickMove < 354) {
      hrStickMove += 0.5;
    } else {
      hrStickMove = 0;
    }
    hourStick.style.transform = `rotate(${hrStickMove}deg)`;
  }
}, 1000);

let clock = document.querySelector("");
clock.addEventListener("click", () => {});
