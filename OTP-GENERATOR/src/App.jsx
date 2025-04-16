import React from 'react'
import './App.css' // Make sure to create this CSS file in your project

const App = () => {
  const [otp, setOtp] = React.useState(0)
  
  function otpGenerator() {
    let x = Math.random() * 1000000
    let y = Math.floor(x)
    let z;
    if (y < 100000) {
      z = y + 100000
    } else {
      z = y
    }
    setOtp(z)
  }
  
  return (
    <div className="container">
      <div className="otp-card">
        <h1 className="title">OTP-GENERATOR</h1>
        <div className="otp-display">
          <h2>OTP: <span className="otp-value">{otp}</span></h2>
        </div>
        <button className="generate-btn" onClick={otpGenerator}>
          Generate New OTP
        </button>
      </div>
    </div>
  )
}

export default App