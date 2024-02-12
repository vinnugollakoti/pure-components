import React from 'react'
import './App.css'
import MyPureComponent from './Components/Purecomp'
import Myregularcomp from './Components/Regularcomp'
const App = () => {
  return (
    <div>
      <center>
        <h1>Pure component</h1>
      <MyPureComponent />
      <h1>Regular component</h1>
      <Myregularcomp /></center>
    </div>
  )
}

export default App
