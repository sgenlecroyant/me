import { actionTypes } from "./actionType";

export function toggleMenu(toggleValue: boolean) {
    return {
        type: actionTypes.TOGGLE_MENU,
        isMenuToggled: toggleValue
    }
}