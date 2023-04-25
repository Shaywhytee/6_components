import React, {useState} from 'react';

export default function Counter() {
    const [count, setCount] = useState(0)
  
    function decrementCount() {
      setCount(prevCount => prevCount - 1)
    }

    function incrementCount() {
      setCount(prevCount => prevCount + 1)
    }
  
    return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
    )
  }
  
  