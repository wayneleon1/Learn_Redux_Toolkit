import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/countSlice";
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Testing Redux Toolkit</h1>
      <div className="container">
        <div className="box-container">
          <div className="counter-container">
            <h4>count: {count}</h4>
          </div>
          <div className="action-btn">
            <button
              id="incre"
              onClick={() => {
                dispatch(increment());
              }}
            >
              Increment
            </button>
            <button
              id="decre"
              onClick={() => {
                dispatch(decrement());
              }}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
