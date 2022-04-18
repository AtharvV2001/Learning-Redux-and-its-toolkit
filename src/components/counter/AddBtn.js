import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementAction } from '../../actions/counterAction'
import { increment } from '../../reducers/counterSlice'

const AddBtn = () => {
    const dispatch = useDispatch()
    return (
        <button className={'Counter-btn'} onClick={() => { dispatch(increment(null)) }}>+</button>
    )
}

export default AddBtn