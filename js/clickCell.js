import winRule from "./winRule.js";
import {X, O, DISABLE, BTN_PRIMARY, BTN_INFO, WINS, WIN_ID_EL} from "./constants.js";

let count = 0;

export default function clickCell(el, win, cellsId) {
    count % 2 === 0 ? click(O, el, win, cellsId) : click(X, el, win, cellsId);
}

function click(n, el, win, cellsId) {
    count++;
    $(el).text(n);
    $(el).addClass(`${DISABLE} ${n} ${n === O ? BTN_PRIMARY : BTN_INFO}`);
    if (winRule(n, cellsId)) {
        alert(`${n.toUpperCase()} ${WINS}`);
        count = 0;
        win[n]++;
        WIN_ID_EL[n].text(win[n]);
    }
}

export function getCount() {
    return count;
}

export function resetCount() {
    count = 0;
}
