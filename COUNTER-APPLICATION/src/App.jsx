import React from 'react'
import "./App.css"

const App = () => {
  const [count,setCount] = React.useState(0)
  function Decrement(){
     setCount(count-1)
  }
  function Reset(){
    setCount(0)
  }
  function Increment(){
    setCount(count+1)
  }
  return (
    <div>
      <h1>COUNTER-APPLICATION</h1>
      <h3>Count : {count}</h3>
      <div className='buttons'>
        <button onClick={Decrement} disabled = {count<=0}>Decrement</button>
        <button onClick={Reset} disabled ={count ==0}>Reset</button>
        <button onClick={Increment} disabled={count>=15}>Increment</button>
      </div>
    </div>
  )
}

export default App
