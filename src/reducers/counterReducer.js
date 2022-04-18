import { DECREMENT_CNT, INCREMENT_CNT } from "../actions/actionConstants";

const initialstate = {
    value : 0,
}

const counterReducer = (state = initialstate, action) => {
    switch (action.type) {
        case INCREMENT_CNT:
            return {
                ...state,
                value : state.value + action.payload
            }

        case DECREMENT_CNT:
            return {
                ...state,
                value : state.value - action.payload
            }
    
        default:
            return state
    }
}

export default counterReducer