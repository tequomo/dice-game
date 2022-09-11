import { MouseEvent, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { DEFAULT_CURRENT_SCORE, DEFAULT_DICE_VALUES } from "../../const";
import { setCurrentScore2 } from "../../store/reducers/action";
import { getPlayer2CurrentScore } from "../../store/reducers/player2-data/selectors";
import { generateDiceValue, sumValues } from "../../utils/utils";
import FinalScore from "../final-score/final-score";
import Dice from "./dices/dice";

function Controls() {

  const currentScore = useSelector(getPlayer2CurrentScore);
  const dispatch = useDispatch();

  const [diceValues, setDiceValues] = useState<number[]>(DEFAULT_DICE_VALUES);
  const [player2CurrentScore, setPlayer2CurrentScore] = useState<number>(DEFAULT_CURRENT_SCORE);

  const rollDice = () => {
    setDiceValues([generateDiceValue(), generateDiceValue()]);
  };

  const updateCurrentScore = useCallback((): void => {
    dispatch(setCurrentScore2(player2CurrentScore));
    // console.log('Current Score = ', player2CurrentScore);
  }, [dispatch, player2CurrentScore]);

  useEffect(() => {
    const current = currentScore + sumValues(diceValues);
    setPlayer2CurrentScore(() => current);
    updateCurrentScore();
  }, [currentScore, diceValues]);

  const handleRollButtonClick = (evt: MouseEvent<HTMLButtonElement>): void => {
    // evt.preventDefault();
    rollDice();
    setPlayer2CurrentScore(() => currentScore + sumValues(diceValues));
    // dispatch(setCurrentScore2(currentScore + sumValues(diceValues)));
  };

  return (
    <div className="controls">
      <button className="controls__new-game">New game</button>
      <Dice diceValues={diceValues} />
      <button className="controls__dice-roll" onClick={handleRollButtonClick}>Roll dice</button>
      <button className="controls__score-hold">Hold</button>
      <FinalScore />
    </div>
  )
}

export default Controls;
