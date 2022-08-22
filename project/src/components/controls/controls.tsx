import FinalScore from "../final-score/final-score";
import Dice from "./dices/dice";

function Controls() {
  return (
    <div className="controls">
      <button className="controls__new-game">New game</button>
      <Dice diceValues={[0,0]} />
      <button className="controls__dice-roll">Roll dice</button>
      <button className="controls__score-hold">Hold</button>
      <FinalScore />
    </div>
  )
}

export default Controls;
