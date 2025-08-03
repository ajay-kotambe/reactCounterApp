import "./FunctionCard.css";
import Card from "./Card";
import FunctionTitle from "./FunctionTitle";
import CounterDiv from "./CounterDiv";

const FunctionCard = () => {
  return (
    <div>
      <Card className="function-card_card">
        <div className="function-card">
          <FunctionTitle />
          <CounterDiv />
          <div className="btn-div">
            <button type="reset" >Reset</button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FunctionCard;
