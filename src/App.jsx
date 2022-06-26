import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./store/slices/counter";

const App = () => {
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const onIncrement = (value) => {
    dispatch(increment(value));
  };

  const onReset = () => {
    dispatch(reset());
  };

  const onDecrement = (value) => {
    dispatch(decrement(value));
  };

  return (
    <div className="container">
      <h1>Redux Toolkit</h1>
      <hr />

      <div className="center">
        <h2>Counter: <span className="orange">{ count }</span></h2>
        <button
          className="btn"
          onClick={ () => onIncrement(10) }
        >+10</button>
        <button
          className="btn mx-1"
          onClick={ onReset }
        >Reset</button>
        <button
          className="btn"
          onClick={ () => onDecrement(10) }
        >-10</button>
      </div>

    </div>
  );
};

export default App;
