import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const onIncrement = () => {
    setCounter(counter + 1);
  };

  const onReset = () => {
    setCounter(0);
  };

  const onDecrement = () => {
    counter > 0 && setCounter(counter - 1);
  };

  return (
    <div className="container">
      <h1>Redux Toolkit</h1>
      <hr />

      <div className="center">
        <h2>Counter: <span className="orange">{ counter }</span></h2>
        <button
          className="btn"
          onClick={ onIncrement }
        >Increment</button>
        <button
          className="btn mx-1"
          onClick={ onReset }
        >Reset</button>
        <button
          className="btn"
          onClick={ onDecrement }
        >Decrement</button>
      </div>

    </div>
  );
};

export default App;
