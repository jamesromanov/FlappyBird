let diePnt = document.querySelector(".diePoint");
let flappyBird = document.querySelector(".bird");
let con = document.querySelector(".container");
let movinBg = document.querySelector(".movingBackground");
let stopC = con.getBoundingClientRect();
let stopM = flappyBird.getBoundingClientRect();
let container = con.getBoundingClientRect();
let start = document.querySelector("h1");
let pipe = document.querySelector(".pipes");
let h2 = document.querySelector("h2");
let button = document.querySelector(".start");
let s = 3;
setInterval(() => {
  if (s == 0) {
    start.textContent = "";
    start.style.padding = "0px";
    start.style.border = "none";

    clearInterval(sett);
  }

  start.style.boxShadow =
    "   -10px 0 0 0 green,10px 0 0 0 green,0 -10px 0 0 green,0 10px 0 0 green";
  start.style.border = "6px solid green";
  start.textContent = `Starting in ${s}`;
  start.style.padding = "20px";

  s--;
}, 900);

setTimeout(() => {
  console.log(movinBg.children);
  let counter = document.querySelector(".counter");
  l = 0;
  setInterval(() => {
    counter.style.padding = "12px 16px";
    counter.style.backgroundColor = "red";
    counter.innerHTML = l;
    l++;
  }, 1000);

  n = 30;

  start = 0;
  fallDown = () => {
    let setT = setInterval(() => {
      flappyBird.style.marginBottom = `${n}px`;
      if (
        stopM.left < container.left ||
        stopM.right > container.right ||
        stopM.bottom > container.bottom ||
        stopM.top < container.top
      ) {
        return;
      } else {
        n -= 4;
      }
    }, 6);
  };
  console.log([...movinBg.children][0] == flappyBird);

  fallDown();

  let goUp = () => {
    con.addEventListener("click", (event) => {
      event.preventDefault();

      flappyBird.style.marginBottom = `${n}px`;
      flappyBird.style.transition = "0.19s";

      let stopM = flappyBird.getBoundingClientRect();
      let container = con.getBoundingClientRect();

      if (
        stopM.left < container.left ||
        stopM.right > container.right ||
        stopM.bottom > container.bottom ||
        stopM.top < container.top
      ) {
        h2.style.boxShadow =
          "   -10px 0 0 0 green, 10px 0 0 0 green, 0 -10px 0 0 green, 0 10px 0 0 green";
        h2.style.border = "6px solid green";
        h2.textContent = `Game over!`;
        h2.style.padding = "20px";
        return;
      } else {
        n += 350;
      }
    });
  };
  goUp();
  function spaceJ() {
    document.addEventListener("keydown", (event) => {
      if (event.code === "Space") {
        event.preventDefault();
        flappyBird.style.marginBottom = `${n}px`;
        flappyBird.style.transition = "0.19s";

        let stopM = flappyBird.getBoundingClientRect();
        let container = con.getBoundingClientRect();

        if (
          stopM.left < container.left ||
          stopM.right > container.right ||
          stopM.bottom > container.bottom ||
          stopM.top < container.top
        ) {
          h2.style.boxShadow =
            "   -10px 0 0 0 green, 10px 0 0 0 green, 0 -10px 0 0 green, 0 10px 0 0 green";
          h2.style.border = "6px solid green";
          h2.textContent = `Game over!`;
          h2.style.padding = "20px";

          return;
        } else {
          n += 350;
        }
      }
    });
  }
  spaceJ();
}, 4000);
