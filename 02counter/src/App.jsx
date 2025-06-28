import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let countValue =15;


  //using reacthooks
  let [counter, setCounter] = useState(15);
  const addValue= ()=>{
    console.log('value added',counter);
    counter+=1;
    if(counter>20){
      setCounter(15);
      
    }
    else setCounter(counter);
  }

  return (
    <>
      
      
      <h1>Vite + React</h1>
      <h2> Counter Value :{counter}</h2>
      <button onClick = {addValue}>Add value</button>
    </>
  )
}

export default App
