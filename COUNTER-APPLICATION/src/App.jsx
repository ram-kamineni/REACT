import React, { useState, useEffect, useRef } from 'react';
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  
  // Add animation when count changes
  useEffect(() => {
    if (countRef.current) {
      countRef.current.classList.add('count-change');
      const timeout = setTimeout(() => {
        countRef.current?.classList.remove('count-change');
      }, 300);
      
      return () => clearTimeout(timeout);
    }
  }, [count]);
  
  function Decrement() {
    setCount(count - 1);
  }
  
  function Reset() {
    setCount(0);
  }
  
  function Increment() {
    setCount(count + 1);
  }
  
  return (
    <div className="counter-container">
      <h1>COUNTER APPLICATION</h1>
      <h3 ref={countRef}>Count: {count}</h3>
      <div className='buttons'>
        <button onClick={Decrement} disabled={count <= 0}>Decrement</button>
        <button onClick={Reset} disabled={count === 0}>Reset</button>
        <button onClick={Increment} disabled={count >= 15}>Increment</button>
      </div>
    </div>
  );
};

export default App;