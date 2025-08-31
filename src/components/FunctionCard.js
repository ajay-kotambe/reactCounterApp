import "./FunctionCard.css";
import Card from "./Card";
import CounterDiv from "./CounterDiv";

const FunctionCard = () => {
  return (
    <div>
      <Card className="function-card_card">
        <div className="function-card">
          <div className="function-title">
            <h2>Increment & Decrement</h2>
          </div>
          <CounterDiv />
        </div>
      </Card>
    </div>
  );
};

export default FunctionCard;
