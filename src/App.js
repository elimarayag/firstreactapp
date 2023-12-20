import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const setToZero = () => {
    setCount(0);
  };

  return (
    <div className="CenterBox">
      <div className="Box">
        <button onClick={increaseCount} className="Button">Increase</button>
        <button onClick={decreaseCount} className="Button">Decrease</button>
        <button onClick={setToZero} className="Button">Set to Zero</button>
        <h1>{count}</h1>
      </div>
    </div>
  );
}

export default App;


