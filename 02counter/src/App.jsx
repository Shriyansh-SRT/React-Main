import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  // let counter = 12;

  const addValue = () => {
    document.querySelector('#msg').innerHTML = '';
    if(counter == 20){
      document.querySelector('#msg').innerHTML = 'Maximum limit reached'
    }else{
      setCounter(counter + 1);
    }
    
    // console.log("count: ", counter);
  }

  const removeValue = () => {
    document.querySelector('#msg').innerHTML = '';
    if(counter == 0 ){
      document.querySelector('#msg').innerHTML = 'Minimun limit reached'
    }else{
      setCounter(counter - 1);
    }
   
    // console.log("count: ", counter);
  }

  return (
    <>
      <h1>Shrii and React</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove</button>
      <h3 id='msg'></h3>
    </>
  )
}

export default App
