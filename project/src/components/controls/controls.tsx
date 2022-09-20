import { MouseEvent, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { DEFAULT_CURRENT_SCORE, DEFAULT_DICE_VALUES, DEFAULT_TOTAL_SCORE, DOUBLE_SIX } from "../../const";
import { setCurrentScore, setTotalScore } from "../../store/reducers/action";
// import { getPlayerCurrentScore } from "../../store/reducers/player-data/selectors";
import { getActivePlayer } from "../../store/reducers/app-state/selectors";
import { generateDiceValue, sumValues } from "../../utils/utils";
import FinalScore from "../final-score/final-score";
import Dice from "./dices/dice";


function Controls(): JSX.Element {

  const activePlayer = useSelector(getActivePlayer);
  // const currentScore = useSelector(getPlayerCurrentScore(activePlayer));
  const dispatch = useDispatch();

  const [diceValues, setDiceValues] = useState<number[]>(DEFAULT_DICE_VALUES);
  const [playerCurrentScore, setPlayerCurrentScore] = useState<number>(DEFAULT_CURRENT_SCORE);
  const [playerTotalScore, setPlayerTotalScore] = useState<number>(DEFAULT_TOTAL_SCORE);

  const rollDice = () => {
    setDiceValues([generateDiceValue(), generateDiceValue()]);
  };

  const resetCurrentValue = (): void => setPlayerCurrentScore(0);

  const updateCurrentScore = useCallback((): void => {
    dispatch(setCurrentScore(activePlayer)(playerCurrentScore));
  }, [activePlayer, dispatch, playerCurrentScore]);

  const updateTotalScore = useCallback((): void => {
    dispatch(setTotalScore(activePlayer)(playerTotalScore));
  }, [activePlayer, dispatch, playerTotalScore]);

  useEffect(() => {
    const sum = (sumValues(diceValues) === DOUBLE_SIX) ? 0 : playerCurrentScore + sumValues(diceValues);
    setPlayerCurrentScore(sum);
  }, [diceValues]);

  useEffect(() => {
    console.log('playerCurrentScore = ', playerCurrentScore);
    updateCurrentScore();
  }, [activePlayer, diceValues, dispatch, playerCurrentScore, updateCurrentScore]);

  useEffect(() => {
    updateTotalScore();
  }, [updateTotalScore])

  const handleRollButtonClick = (evt: MouseEvent<HTMLButtonElement>): void => {
    rollDice();
  };

  const handleHoldButtonClick = (evt: MouseEvent<HTMLButtonElement>): void => {
    setPlayerTotalScore((state) => state + playerCurrentScore);
    resetCurrentValue();
  };

  return (
    <div className="controls">
      <button className="controls__new-game">New game</button>
      <Dice diceValues={diceValues} />
      <button className="controls__dice-roll" onClick={handleRollButtonClick}>Roll dice</button>
      <button className="controls__score-hold" onClick={handleHoldButtonClick}>Hold</button>
      <FinalScore />
    </div>
  )
}

export default Controls;
