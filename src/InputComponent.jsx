import './style.css';
import React, { useState } from 'react';

export default function InputComponent() {
  const [inputData, setInputData] = useState('');
  const [counter, setCounter] = useState(0);
  function updateInput(event) {
    setInputData(event.target.value);
  }
  // Increment method
  function increment() {
    setCounter((prevCounter) => prevCounter + 1);
  }
  // decrement method
  function decrement() {
    setCounter((prevCounter) => prevCounter - 1);
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      {/* input field value update */}
      {inputData && <p>{inputData && inputData}</p>}
      <input id="inputText" className="inputText" onChange={updateInput} />

      <div className="container">
        <button onClick={() => (counter > 0 ? decrement() : '')}>-</button>
        <span>{counter}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}
