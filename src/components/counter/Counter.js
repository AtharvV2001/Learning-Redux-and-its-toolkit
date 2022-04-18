import React from 'react'
import { useSelector } from 'react-redux'
import AddBtn from './AddBtn'
import SubtractBtn from './SubtractBtn'

const Counter = () => {
    const value = useSelector((state)=>state.counter.value)
    return (<div className={'Counter-block'}>
        <SubtractBtn/>
        <div className={'Counter-value'}>{value}</div>
        <AddBtn/>
    </div>)
}

export default Counter