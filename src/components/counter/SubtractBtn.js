import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementAction } from '../../actions/counterAction'
import { decrement } from '../../reducers/counterSlice'

const SubtractBtn = () => {
    const dispatch = useDispatch()
    return (
        <button className={'Counter-btn'} onClick={() => { dispatch(decrement(null)) }}>-</button>
    )
}

export default SubtractBtn