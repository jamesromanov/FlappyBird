let diePnt = document.querySelector(".diePoint");
let flappyBird = document.querySelector(".bird");
let con = document.querySelector(".container");
let movinBg = document.querySelector(".movingBackground");
console.log(movinBg.children);

// flappyBird = 0;
diePnt = 0;

n = 30;
let setT = setInterval(() => {
  flappyBird.style.marginBottom = `${b}px`;
  b -= 4;
  if (b == -450) clearInterval(setT);
}, 10);
b = 30;
let fallDown = () => {
  con.addEventListener("click", () => {
    flappyBird.style.marginBottom = `${n}px`;
    n += 100;
    b = 0;
  });
};
fallDown();
