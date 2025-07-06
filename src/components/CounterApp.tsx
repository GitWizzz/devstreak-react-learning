import React, { useState } from "react";

const CounterApp: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="container">
      <h1 className="m-2">Counter: {count}</h1>
      <div className="buttons">
        <button className="m-2" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className="m-2" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button className="m-2" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
