import removeClass from "./removeClass.js";
import {resetCount} from "./clickCell.js";
import {WON_TEXT, PLUS, TIE_TEXT} from "./constants.js";

export default function showWinner(winner, gameCell) {
    if (winner) {
        alert(`${winner.toUpperCase()} ${WON_TEXT}`);
    }
    else {
        alert(TIE_TEXT);
    }
    $(gameCell).text(PLUS);
    removeClass(gameCell);
    resetCount();
}
