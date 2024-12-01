import {useState} from 'react';
import React from 'react'

const Counter = () => {

    const [count,setCount] = useState(0);

    const Increment = () => {setCount(count + 1)};
    const Decrement = () => {setCount(count - 1)};
    const Reset = () => {setCount(0)};
  

  return (
    <>
    <div className='Content'>
    <h1 className='header'>Counter APP</h1>
    <p className='count'>{count}</p>
     <div className='btn'>
      <button className='increment' onClick={Increment}>Increment</button>
      <button className='decrement' onClick={Decrement}>Decrement</button>
      </div>
      <button className='reset' onClick={Reset}>Reset</button>
    </div>
    </>
  )
}

export default Counter
