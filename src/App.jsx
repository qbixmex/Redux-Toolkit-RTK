import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./store/slices/counter";

const App = () => {
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(increment());
  };

  const onReset = () => {
    dispatch(reset());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="container">
      <h1>Redux Toolkit</h1>
      <hr />

      <div className="center">
        <h2>Counter: <span className="orange">{ count }</span></h2>
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
