import {CELLS} from "./constants.js";

export default function winRule(n) {
    const [one, two, three, four, five, six, seven, eight, nine] = CELLS;
    return (
        (idHasClass(one, n) && idHasClass(two, n) && idHasClass(three, n)) ||
        (idHasClass(four, n) && idHasClass(five, n) && idHasClass(six, n)) ||
        (idHasClass(seven, n) && idHasClass(eight, n) && idHasClass(nine, n)) ||
        (idHasClass(one, n) && idHasClass(four, n) && idHasClass(seven, n)) ||
        (idHasClass(two, n) && idHasClass(five, n) && idHasClass(eight, n)) ||
        (idHasClass(three, n) && idHasClass(six, n) && idHasClass(nine, n)) ||
        (idHasClass(one, n) && idHasClass(five, n) && idHasClass(nine, n)) ||
        (idHasClass(three, n) && idHasClass(five, n) && idHasClass(seven, n))
    );
}

function idHasClass(id, className) {
    return $(`#${id}`).hasClass(className);
}
