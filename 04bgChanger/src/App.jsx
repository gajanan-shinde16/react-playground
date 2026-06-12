import { useState } from 'react'
import './App.css'
import Btn from './components/Btn'

function App() {
  const [color, setColor] = useState('black')

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-10" style={{ backgroundColor: color }}>
      <div className = "buttons flex flex-wrap justify-center mt-100 bg-gray-200 p-5 rounded-lg shadow-lg">
        <Btn color="green" colChange={() => setColor('green')} />
        <Btn color="blue" colChange={() => setColor('blue')} />
        <Btn color="yellow" colChange={() => setColor('yellow')} />
        <Btn color="purple" colChange={() => setColor('purple')}/>
        
      </div>
    </div>
    
  )
}

export default App
