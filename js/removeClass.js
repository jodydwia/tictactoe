import { DISABLE, O, X, BTN_PRIMARY, BTN_INFO} from "./constants.js";

export default function removeClass(el) {
   $(el).removeClass(`${DISABLE} ${O} ${X} ${BTN_PRIMARY} ${BTN_INFO}`)
}
