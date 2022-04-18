import { TOGGLE_ANIMATION } from "../actions/actionConstants"

const initialState = {
    rotating: true
}

const rotateReducer = (state = initialState,action) => {
    switch(action.type){
        case TOGGLE_ANIMATION:
            return {
                ...state,
                rotating: !state.rotating,
            }
        default:
            return state
    }
}

export default rotateReducer