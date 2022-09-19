import { MouseEvent, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { DEFAULT_CURRENT_SCORE, DEFAULT_DICE_VALUES } from "../../const";
import { setPlayer2CurrentScore } from "../../store/reducers/action";
// import { setPlayer2CurrentScore } from "../../store/reducers/action";
// import { getActivePlayer } from "../../store/reducers/app-state/selectors";
import { getPlayer2CurrentScore } from "../../store/reducers/player2-data/selectors";
import { generateDiceValue, sumValues } from "../../utils/utils";
import FinalScore from "../final-score/final-score";
import Dice from "./dices/dice";

function Controls() {

  // const activePlayer = useSelector(getActivePlayer);
  // const currentScore = useSelector(getPlayerCurrentScore(activePlayer));
  const currentScore = useSelector(getPlayer2CurrentScore);
  const dispatch = useDispatch();

  const [diceValues, setDiceValues] = useState<number[]>(DEFAULT_DICE_VALUES);
  const [player2Score, setPlayer2Score] = useState<number>(DEFAULT_CURRENT_SCORE);

  const rollDice = () => {
    setDiceValues([generateDiceValue(), generateDiceValue()]);
    setPlayer2Score(() => currentScore + sumValues(diceValues));
  };

  const updateCurrentScore = useCallback((): void => {
    dispatch(setPlayer2CurrentScore(player2Score));
    console.log('Current Score = ', player2Score);
  }, [dispatch, player2Score]);

  useEffect(() => {
    const current = currentScore + sumValues(diceValues);
    console.log('current = ', current);
    setPlayer2Score(() => current);
    updateCurrentScore();
  }, [currentScore, diceValues]);

  const handleRollButtonClick = (evt: MouseEvent<HTMLButtonElement>): void => {
    // evt.preventDefault();
    rollDice();
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
