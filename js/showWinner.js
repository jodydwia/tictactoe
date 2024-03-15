import removeClass from "./removeClass.js";
import {resetCount} from "./clickCell.js";
import {WON_TEXT, PLUS, TIE_TEXT, GAME_CELL} from "./constants.js";

export default function showWinner(winner) {
    if (winner) {
        alert(`${winner.toUpperCase()} ${WON_TEXT}`);
    }
    else {
        alert(TIE_TEXT);
    }
    GAME_CELL.text(PLUS);
    removeClass();
    resetCount();
}
