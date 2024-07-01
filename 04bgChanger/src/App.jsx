import { useState } from "react"

function App() {

  let [color, setColor] = useState('white');

  return(
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl">

          <button className="cursor-pointer outline-none px-4 py-1 text-white rounded-xl shadow-lg" style={{backgroundColor: 'red'}}
          onClick={() => (setColor('red'))}
          >Red</button>

          <button className="cursor-pointer outline-none px-4 py-1 text-white rounded-xl shadow-lg " style={{backgroundColor: 'blue'}}
          onClick={() => (setColor('blue'))}>Blue</button>

          <button className="cursor-pointer outline-none px-4 py-1 text-white rounded-xl shadow-lg" style={{backgroundColor: 'green'}}
          onClick={() => (setColor('green'))}>Green</button>

          <button className="cursor-pointer outline-none px-4 py-1 text-white rounded-xl shadow-lg" style={{backgroundColor: 'purple'}}
          onClick={() => (setColor('purple'))}>Purple</button>

          <button className="cursor-pointer outline-none px-4 py-1 text-white rounded-xl shadow-lg" style={{backgroundColor: 'orange'}}
          onClick={() => (setColor('orange'))}>Orange</button>

          <button className="cursor-pointer outline-none px-4 py-1 text-white rounded-xl shadow-lg" style={{backgroundColor: 'pink'}}
          onClick={() => (setColor('pink'))}>Pink</button>

          <button className="cursor-pointer outline-none px-4 py-1 text-white rounded-xl shadow-lg" style={{backgroundColor: 'grey'}}
          onClick={() => (setColor('grey'))}>Grey</button>
        </div>
      </div>

    </div>
    
  )
  
}

export default App  
