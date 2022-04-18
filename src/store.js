import { combineReducers, createStore } from "redux"
import counterReducer from "./reducers/counterReducer"
import rotateReducer from "./reducers/rotateReducer"

const rootReducers = combineReducers({
    rotate: rotateReducer,
    counter: counterReducer
})

const configureStore = (state) => {
    return createStore(rootReducers, state)
}

export default configureStore