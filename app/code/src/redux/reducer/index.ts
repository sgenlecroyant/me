import { actionTypes } from "../action/actionType";

const initialState = {
    isMenuToggled: false
}

export const menuReducer = (state = initialState, action: any) => {
    console.log("inside menu reducer ...")
    switch (action.type) {
        case actionTypes.TOGGLE_MENU:
            console.log("ToggleMenu action triggered ...")
            return {
                ...state,
                isMenuToggled: !state.isMenuToggled
            }
    
        default:
            return {
                ...state
            }
    }
}

