import "./CounterDiv.css";

const CounterDiv = (props) => {
  return (
    <div className="counter-div">
      <button>-</button>
      <span>0</span>
      <button>+</button>
    </div>
  );
};
export default CounterDiv;
