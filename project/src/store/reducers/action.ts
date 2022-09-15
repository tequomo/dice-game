import { createAction } from "@reduxjs/toolkit";
import { PlayerNumber } from "../../const";
import { ActionType, PlayerActionType } from "../../types/action";
import { actionTypeGenerator } from "../../utils/common";

export const setFinalScore = createAction(
  ActionType.SetFinalScore,
  (finalScore:number) => ({
    payload: finalScore,
  }),
);

export const setActivePlayer = createAction(
  ActionType.SetActivePlayer,
  (activePlayer: number) => ({
    payload: activePlayer,
  }),
);

export const setCurrentScore = (player: PlayerNumber) => createAction(
  actionTypeGenerator(player, PlayerActionType.SetCurrentScore),
  (currentScore: number) => ({
    payload: currentScore,
  }),
);

export const setCurrentScore2 = createAction(
  ActionType.SetCurrentScore2,
  (currentScore: number) => ({
    payload: currentScore,
  }),
);

export const setCurrentScore1 = createAction(
  ActionType.SetCurrentScore1,
  (currentScore: number) => ({
    payload: currentScore,
  }),
);

export const setTotalScore = createAction(
  ActionType.SetTotalScore,
  (totalScore: number) => ({
    payload: totalScore,
  }),
);
// !!!???
export const setDiceShow = createAction(
  ActionType.SetDiceShow,
  (diceShow: boolean) => ({
    payload: diceShow,
  }),
);
