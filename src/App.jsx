import "./App.css";
import { UseSelector, useDispatch } from "react-redux";
function App() {
  return (
    <>
      <h1>Testing Redux Toolkit</h1>
      <div className="container">
        <div className="box-container">
          <div className="counter-container">
            <h4>count: 0</h4>
          </div>
          <div className="action-btn">
            <button id="incre">Increment</button>
            <button id="decre">Decrement</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
