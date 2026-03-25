// --- State ---
let sCount = 0;
let lCount = 0;
let running = false;
let startTime = null;
let duration = 5000;
let rafId = null;

// --- DOM references ---
const durInput = document.getElementById("dur");
const startBtn = document.getElementById("startBtn");
const timerBar = document.getElementById("timerBar");
const timerLabel = document.getElementById("timerLabel");
const countS = document.getElementById("countS");
const countL = document.getElementById("countL");
const keyS = document.getElementById("keyS");
const keyL = document.getElementById("keyL");
const playerS = document.getElementById("playerS");
const playerL = document.getElementById("playerL");
const result = document.getElementById("result");
const resultEmoji = document.getElementById("resultEmoji");
const resultTitle = document.getElementById("resultTitle");
const resultSub = document.getElementById("resultSub");
const againBtn = document.getElementById("againBtn");

// --- Game functions ---

function startGame() {
  const durVal = parseInt(durInput.value);
  if (isNaN(durVal) || durVal < 1) return;

  duration = durVal * 1000;
  sCount = 0;
  lCount = 0;
  countS.textContent = "0";
  countL.textContent = "0";

  result.classList.remove("show");
  startBtn.disabled = true;
  playerS.classList.add("active");
  playerL.classList.add("active");

  running = true;
  startTime = performance.now();
  updateBar();
}

function updateBar() {
  const elapsed = performance.now() - startTime;
  const remaining = Math.max(0, duration - elapsed);
  const pct = (remaining / duration) * 100;

  timerBar.style.width = pct + "%";

  if (pct > 30) {
    timerBar.style.background = "#4a7fd4";
  } else if (pct > 10) {
    timerBar.style.background = "#d4913a";
  } else {
    timerBar.style.background = "#d44a4a";
  }

  timerLabel.textContent = (remaining / 1000).toFixed(1) + "s remaining";

  if (remaining > 0) {
    rafId = requestAnimationFrame(updateBar);
  } else {
    endGame();
  }
}

function endGame() {
  running = false;
  timerLabel.textContent = "Time's up!";
  timerBar.style.width = "0%";
  playerS.classList.remove("active");
  playerL.classList.remove("active");

  if (sCount > lCount) {
    resultEmoji.textContent = "🏆";
    resultTitle.textContent = "Player 1 wins!";
    resultSub.textContent = `S: ${sCount} vs L: ${lCount} — ${sCount - lCount} press${sCount - lCount !== 1 ? "es" : ""} ahead`;
  } else if (lCount > sCount) {
    resultEmoji.textContent = "🏆";
    resultTitle.textContent = "Player 2 wins!";
    resultSub.textContent = `L: ${lCount} vs S: ${sCount} — ${lCount - sCount} press${lCount - sCount !== 1 ? "es" : ""} ahead`;
  } else {
    resultEmoji.textContent = "🤝";
    resultTitle.textContent = "It's a tie!";
    resultSub.textContent = `Both pressed ${sCount} times — incredible!`;
  }

  result.classList.add("show");
}

function resetGame() {
  result.classList.remove("show");
  startBtn.disabled = false;
  timerLabel.textContent = "Ready — set your time and press start";
  timerBar.style.width = "100%";
  timerBar.style.background = "#4a7fd4";
  countS.textContent = "0";
  countL.textContent = "0";
  sCount = 0;
  lCount = 0;
}

function flashKey(el) {
  el.classList.add("pressed");
  setTimeout(() => el.classList.remove("pressed"), 80);
}

function bumpPlayer(el) {
  el.classList.add("bump");
  setTimeout(() => el.classList.remove("bump"), 80);
}

// --- Event listeners ---

startBtn.addEventListener("click", startGame);
againBtn.addEventListener("click", resetGame);

document.addEventListener("keydown", (e) => {
  if (!running) return;

  if (e.key === "s" || e.key === "S") {
    sCount++;
    countS.textContent = sCount;
    flashKey(keyS);
    bumpPlayer(playerS);
  } else if (e.key === "l" || e.key === "L") {
    lCount++;
    countL.textContent = lCount;
    flashKey(keyL);
    bumpPlayer(playerL);
  }
});