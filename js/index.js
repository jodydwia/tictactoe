// JavaScript Document
import winRule from "./winRule.js";
import showWinner from "./showWinner.js";
import removeClass from "./removeClass.js";
import clickCell, {getCount, resetCount} from "./clickCell.js";
import {O, X, ALREADY_SELECTED, DISABLE, PLUS, CELLS, GAME_CELL} from "./constants.js";

$(document).ready(function () {
  let win = {
    o: 0,
    x: 0
  };

  GAME_CELL.click(function () {
    if (winRule(O)) {
      showWinner(O);
    } else if (winRule(X)) {
      showWinner(X);
    } else if (getCount() === CELLS.length) {
      showWinner('');
    } else if ($(this).hasClass(DISABLE)) {
      alert(ALREADY_SELECTED);
    } else {
      clickCell(this, win);
    }

  });

  $('#reset').click(function () {
    GAME_CELL.text(PLUS);
    removeClass();
    resetCount();
  });

});
