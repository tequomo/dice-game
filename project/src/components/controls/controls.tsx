import { MouseEvent, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  DefaultScoreValue,
  DEFAULT_DICE_VALUES,
  DiceValue,
  PlayerNumber
} from "../../const";
import { setActivePlayer, setCurrentScore, setTotalScore } from "../../store/reducers/action";
import { getActivePlayer } from "../../store/reducers/app-state/selectors";
import { getPlayerTotalScore } from "../../store/reducers/player-data/selectors";
import { generateDiceValue, sumValues } from "../../utils/utils";
import FinalScore from "../final-score/final-score";
import Dice from "./dices/dice";


function Controls(): JSX.Element {

  const activePlayer = useSelector(getActivePlayer);
  const totalScore = useSelector(getPlayerTotalScore(activePlayer));
  const dispatch = useDispatch();

  const [diceValues, setDiceValues] = useState<number[]>(DEFAULT_DICE_VALUES);
  const [playerCurrentScore, setPlayerCurrentScore] = useState<number>(DefaultScoreValue.Current);
  const [playerTotalScore, setPlayerTotalScore] = useState<number>(DefaultScoreValue.Total);

  const rollDice = () => {
    setDiceValues([generateDiceValue(), generateDiceValue()]);
  };

  const resetCurrentValue = (): void => {
    setPlayerCurrentScore(0);
    setDiceValues(DEFAULT_DICE_VALUES);
  };

  const updateCurrentScore = useCallback((): void => {
    dispatch(setCurrentScore(activePlayer)(playerCurrentScore));
  }, [activePlayer, dispatch, playerCurrentScore]);

  const updateTotalScore = useCallback((): void => {
    const totalScoreSum = totalScore + playerTotalScore;
    dispatch(setTotalScore(activePlayer)(totalScoreSum));
    setPlayerTotalScore(DefaultScoreValue.Total);
  }, [dispatch, playerTotalScore]);

  const togglePlayer = (): void => {
    const nextPlayer = ((Object.values(PlayerNumber)
      .filter((value) => !isNaN(Number(value)) && value !== activePlayer)
    ))[0];
    dispatch(setActivePlayer(+nextPlayer));
  };

  // const endGame =

  useEffect(() => {
    const sum = (sumValues(diceValues) === DiceValue.DoubleSix) ? 0 : playerCurrentScore + sumValues(diceValues);
    setPlayerCurrentScore(sum);
  }, [diceValues]);

  useEffect(() => {
    updateCurrentScore();
  }, [diceValues, dispatch, playerCurrentScore, updateCurrentScore]);

  useEffect(() => {
    updateTotalScore();
  }, [playerTotalScore, updateTotalScore])

  const handleRollButtonClick = (evt: MouseEvent<HTMLButtonElement>): void => {
    rollDice();
  };

  const handleHoldButtonClick = async (evt: MouseEvent<HTMLButtonElement>): Promise<void> => {
    setPlayerTotalScore((state) => state + playerCurrentScore);
    resetCurrentValue();
    setTimeout(() => {
      togglePlayer();
    }, 0);
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
