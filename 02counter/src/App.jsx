import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  const incCounter = ()=>{
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);

    setCounter((prevCounter) => prevCounter+1);
    setCounter((prevCounter) => prevCounter+1);
    setCounter((prevCounter) => prevCounter+1);
    setCounter((prevCounter) => prevCounter+1);
  
  }

   const decCounter = ()=>{
      // setCounter(counter-1);
      // setCounter(counter-1);
      // setCounter(counter-1);
      // setCounter(counter-1);

      setCounter(prevCounter => prevCounter-1);
      setCounter(prevCounter => prevCounter-1);
      setCounter(prevCounter => prevCounter-1);
      setCounter(prevCounter => prevCounter-1);
    }
  

  return (
    <>
      <div>
        <h1>Counter : {counter}</h1>
        <br /><br />
        <button onClick={incCounter}>Increase</button>
        <br />
        <button onClick={decCounter}>Decrease</button>
      </div>
    </>
  )
}

export default App
