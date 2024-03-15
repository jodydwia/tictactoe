import {GAME_CELL, DISABLE, O, X, BTN_PRIMARY, BTN_INFO} from "./constants.js";

export default function removeClass() {
    GAME_CELL.removeClass(`${DISABLE} ${O} ${X} ${BTN_PRIMARY} ${BTN_INFO}`);
}
