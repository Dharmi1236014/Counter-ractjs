





import { useState } from "react"
import './app.css'

function App() {
  let [count, setcount] = useState(0);

  function increment() {
    setcount(count + 1);
  }

  function decrement() {
    setcount(count - 1);
  }

  function resetCount() {
    setcount(count = 0);
  }


  return (
    <>
      <h1>COUNTER</h1>
      <div className="counter-wrap">
        <button onClick={increment}>+</button>

        <p style={{ padding: "10px" }}>{count}</p>

        <button onClick={decrement}>-</button>
      </div>
      <div className="close">
        <button type="submit" onClick={() => resetCount()}>RESET</button>
      </div>
    </>
  )
}

export default App;

