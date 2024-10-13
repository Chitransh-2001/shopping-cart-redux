import React from 'react'
import Counter from '../Redux/CounterSlice/Counter'
import { useSelector,useDispatch } from 'react-redux'
import { increaseby1,decreaseby1,increaseby10,decreaseby10 } from '../Redux/CounterSlice/Counter'
const CounterValue = () => {
    const count =useSelector((state)=>state.counter)
    const dispatch= useDispatch()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{dispatch(increaseby1())}}>increaseby1</button>
      <button onClick={()=>{dispatch(decreaseby1())}}>decreaseby1</button> 
      <button onClick={()=>{dispatch(increaseby10())}}>increaseby10</button>
      <button onClick={()=>{dispatch(decreaseby10())}}>decreaseby10</button>
    </div>
  )
}

export default CounterValue
