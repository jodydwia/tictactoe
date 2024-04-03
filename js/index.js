// JavaScript Document
import winRule from "./winRule.js";
import showWinner from "./showWinner.js";
import removeClass from "./removeClass.js";
import clickCell, {getCount, resetCount} from "./clickCell.js";
import {O, X, ALREADY_SELECTED, DISABLE, PLUS} from "./constants.js";

let win = {
  o: 0,
  x: 0
};

let scale = 0;
let cellsId = [];
const btnStart = document.getElementById('start');
const game = document.getElementById('game');

const scaleInput = document.getElementById('scale');
scaleInput.addEventListener('change', function () {
  scale = scaleInput.value;
})

for (let i = 3; i <= 9; i++) {
  const option = document.createElement('option');
  option.value = i.toString();
  option.label = i.toString();
  scaleInput.append(option);
}

btnStart.addEventListener('click', function () {
  if (scaleInput.value < 3) return;
  cellsId = [];
  game.innerHTML = "";

  game.style.gridTemplateColumns = `repeat(${scale}, 1fr)`;
  for (let i = 1; i <= scale*scale ; i++) {
    const cell = document.createElement('li');
    cell.textContent = PLUS;
    const cellId = 'cell' + i;
    cell.id = cellId;
    cellsId.push(cellId);
    cell.classList.add('btn')
    game.append(cell);
  }

  const gameCell = document.querySelectorAll('#game li');
  gameCell.forEach(cell => cell.addEventListener('click', function () {
    if (winRule(O, cellsId, scale)) {
      showWinner(O, gameCell);
    } else if (winRule(X, cellsId, scale)) {
      showWinner(X, gameCell);
    } else if (getCount() === cellsId.length) {
      showWinner('');
    } else if ($(this).hasClass(DISABLE)) {
      alert(ALREADY_SELECTED);
    } else {
      clickCell(this, win, cellsId);
    }
  }))

  const reset = document.getElementById('reset');
  reset.addEventListener('click',function () {
    gameCell.forEach(el => el.textContent = PLUS)
    removeClass(gameCell);
    resetCount();
  });

})
