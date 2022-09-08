import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { DEFAULT_CURRENT_SCORE, DEFAULT_DICE_VALUES } from "../../const";
import { setCurrentScore2 } from "../../store/reducers/action";
import { getPlayer1CurrentScore } from "../../store/reducers/player1-data/selectors";
import { generateDiceValue, sumValues } from "../../utils/utils";
import FinalScore from "../final-score/final-score";
import Dice from "./dices/dice";

function Controls() {

  const currentScore = useSelector(getPlayer1CurrentScore);
  const dispatch = useDispatch();

  const [diceValues, setDiceValues] = useState<number[]>(DEFAULT_DICE_VALUES);
  const [player2CurrentScore, setPlayer2CurrentScore] = useState<number>(DEFAULT_CURRENT_SCORE);

  const rollDice = () => {
    setDiceValues([generateDiceValue(), generateDiceValue()]);
    const current = currentScore + sumValues(diceValues);
    dispatch(setCurrentScore2(current));
    setPlayer2CurrentScore(currentScore + sumValues(diceValues));
    console.log('Current Score = ', player2CurrentScore);
  };

  return (
    <div className="controls">
      <button className="controls__new-game">New game</button>
      <Dice diceValues={diceValues} />
      <button className="controls__dice-roll" onClick={rollDice}>Roll dice</button>
      <button className="controls__score-hold">Hold</button>
      <FinalScore />
    </div>
  )
}

export default Controls;
