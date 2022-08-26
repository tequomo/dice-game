import { createAction } from "@reduxjs/toolkit";
import { ActionType } from "../../types/action";

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

export const setCurrentScore = createAction(
  ActionType.SetCurrentScore,
  (currentScore: number) => ({
    payload: currentScore,
  }),
);

export const setCurrentScore1 = createAction(
  ActionType.SetCurrentScore,
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
