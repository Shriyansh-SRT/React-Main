import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  //let count = 10;

  const addCount = () => {
    // console.log("count:", count);
    counter++;
    setCounter(counter);

  }

  const removeCount = () => {
    counter--;
    setCounter(counter);
 
  }

  return (
    <>
      <h1>Shrii and React</h1>
      <h2 >Counter: <span id='showCount'>{counter}</span></h2>
      <button onClick={addCount}>Add</button>
      <br />
      <br />
      <button onClick={removeCount}>Remove</button>
    
    </>
  )
}

export default App
