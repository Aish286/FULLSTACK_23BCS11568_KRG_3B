import React from 'react'
import './Counter.css'

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  return (
    <div className='counter-container'>
      <p id='para'>You have clicked {count} times </p>
      <button id='btn' onClick={handleClick} disabled={count === 10}>
        {count === 10 ? "Limit Reached" : "Click me"}
      </button>
    </div>
  )
}

export default Counter
