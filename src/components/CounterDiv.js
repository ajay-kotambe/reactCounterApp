import "./CounterDiv.css";
import { useState } from "react";

const CounterDiv = (props) => {
  const [counterVal, setCounter] = useState(0);

  const clickDecreaseHandler = () => {
    setCounter(counterVal - 1);
  };

  const clickIncreaseHandler = () => {
    setCounter(counterVal + 1);
  };

  const clickResetHandler = () => {
    setCounter(0);
  };

  return (
    <div>
      <div className="counter-div">
        <button className="btn-white" onClick={clickDecreaseHandler}>
          -
        </button>
        <span>{counterVal}</span>
        <button className="btn-white" onClick={clickIncreaseHandler}>
          +
        </button>
      </div>
      <div className="btn-div">
        <button className="btn-reset" onClick={clickResetHandler}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default CounterDiv;
