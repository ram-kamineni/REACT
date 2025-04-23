import React from 'react'
import "./App.css"
import First from '../components/First'
import Second from '../components/Second'
import Third from '../components/Third'

const App = () => {
  const prop1 = "/using properties 1"
  const prop2 = "/using properties 2"
  return (
    <>
    <First prop1 = {prop1}  prop2 = {prop2}/>
    <Second prop1 = {prop1}  prop2 = {prop2}/>
    <Third prop1 = {prop1}  prop2 = {prop2}/>
    </>
  )
}

export default App
