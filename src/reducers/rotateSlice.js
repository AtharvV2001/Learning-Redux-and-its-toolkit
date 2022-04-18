import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    rotating: true
}

const rotateSlice = createSlice({
    name: 'rotate',

    initialState,

    reducers: {
        toggle: (state, action) => {
            state.rotating = !state.rotating
        },
    }
})

export const { toggle } = rotateSlice.actions

export default rotateSlice.reducer