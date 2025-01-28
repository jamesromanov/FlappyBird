let diePnt = document.querySelector(".diePoint");
let flappyBird = document.querySelector(".bird");
let con = document.querySelector(".container");
let movinBg = document.querySelector(".movingBackground");
console.log(movinBg.children);

n = 30;
fallDown = () => {
  let setT = setInterval(() => {
    flappyBird.style.marginBottom = `${n}px`;
    if (n == -450) clearInterval(setT);
    n -= 4;
  }, 10);
};
console.log([...movinBg.children][0] == flappyBird);
fallDown();
let goUp = () => {
  con.addEventListener("click", () => {
    n += 150;
    flappyBird.style.marginBottom = `${n}px`;
    flappyBird.style.transition = "0.1s";
    event.preventDefault();
  });
};
goUp();
