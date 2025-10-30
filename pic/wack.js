const startBtn = document.getElementById("start");
const scoreEl = document.getElementById("score");
const holes = document.querySelectorAll(".hole");

let score = 0;
let play = false;
let timer;

function randomHole() {
  const i = Math.floor(Math.random() * holes.length);
  return holes[i];
}

function showMole() {
  if (!play) return;
  const hole = randomHole();

  const mole = document.createElement("div");
  mole.classList.add("mole");
  hole.appendChild(mole);

  setTimeout(() => {
    hole.classList.add("active");
  }, 50);

  mole.addEventListener("click", () => {
    if (!play) return;
    score++;
    scoreEl.textContent = score;
    hole.innerHTML = "";
    hole.classList.remove("active");
  });

  setTimeout(() => {
    hole.classList.remove("active");
    hole.innerHTML = "";
  }, 800);
}

function startGame() {
  score = 0;
  scoreEl.textContent = score;
  play = true;
  startBtn.disabled = true;

  timer = setInterval(showMole, 1000);

  setTimeout(() => {
    play = false;
    clearInterval(timer);
    alert(`Game over! Your score: ${score}`);
    startBtn.disabled = false;
  }, 20000);
}

startBtn.addEventListener("click", startGame);
