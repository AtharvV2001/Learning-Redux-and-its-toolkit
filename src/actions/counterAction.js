import { DECREMENT_CNT, INCREMENT_CNT } from "./actionConstants"

export const incrementAction = () => {
    return {
        type: INCREMENT_CNT,
        payload: 1
    }
}

export const decrementAction = () => {
    return {
        type: DECREMENT_CNT,
        payload: 1
    }
}