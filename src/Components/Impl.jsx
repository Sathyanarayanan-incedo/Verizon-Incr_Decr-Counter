import React, { useState } from 'react';
import './Counter.css';

function Impl() {
   
    const [count, setCount] = useState(0);
  
    return (
      <div className="counter-container">
        <h1 className="count">Count: {count}</h1>
        <div className="buttons">
          <button className="increment" onClick={() => setCount(count + 1)}>Increment</button>
          <button className="decrement" onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
      </div>
    );
  
  
 }

  export default Impl;