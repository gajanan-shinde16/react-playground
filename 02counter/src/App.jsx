import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  const incCounter = ()=>{
    // setCounter(counter==20?20:counter + 1);

    if(counter == 20){
      alert("Maximum Limit Reached");
    }else{
      setCounter(counter+1);
    }
  }

   const decCounter = ()=>{
    // setCounter(counter==0?0:counter - 1);

    if(counter == 0){
      alert("Minimum Limit Reached");
    }else{
      setCounter(counter-1);
    }
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
