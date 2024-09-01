const cells = document.querySelectorAll(".cell");
const restartBtn = document.querySelector("#restart");
const status = document.getElementById("gamestatus");
const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let gameOver = false;
let clickCount = 1;
let currentPlayer = "X";
// Event ketika di klik
function cellClick(event) {
  const cell = event.target;
  if (!cell.textContent) {
    if (clickCount % 2 === 1) {
      currentPlayer = "X";
      cell.textContent = "X";
    } else {
      cell.textContent = "O";
      currentPlayer = "O";
    }
  }
  checkWin();
  clickCount++;
}
cells.forEach((cell) => {
  cell.addEventListener("click", cellClick);
});
// Cek jika permainan ada yang menang
function checkWin() {
  const status = document.getElementById("gamestatus");
  for (condition of winCondition) {
    const [a, b, c] = condition;
    const cellA = cells[a].textContent;
    const cellB = cells[b].textContent;
    const cellC = cells[c].textContent;
    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    }
    if (cellA == cellB && cellB == cellC) {
      gameOver = true;
      status.textContent = `${currentPlayer} Menang!`;
      cells[a].classList.add("winning-cell");
      cells[b].classList.add("winning-cell");
      cells[c].classList.add("winning-cell");

      // Terapkan efek coretan pada sel-sel tersebut
      cells[a].style.textDecoration = "line-through";
      cells[b].style.textDecoration = "line-through";
      cells[c].style.textDecoration = "line-through";

      // Atur warna efek coretan sesuai dengan CSS Anda
      cells[a].style.textDecorationColor = "black"; // Ganti dengan warna yang Anda inginkan
      cells[b].style.textDecorationColor = "black"; // Ganti dengan warna yang Anda inginkan
      cells[c].style.textDecorationColor = "black";
      break;
    }
  }
  if (!gameOver && clickCount == 9) {
    gameOver = true;
    status.textContent = "Seri!";
  }
}

