import { createAction } from "@reduxjs/toolkit";
import { ActionStatus, PlayerNumber } from "../../const";
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

export const setPlayer1CurrentScore = createAction(
  ActionType.SetPlayer1CurrentScore,
  (currentScore: number) => ({
    payload: currentScore,
  }),
);

export const setPlayer2CurrentScore = createAction(
  ActionType.SetPlayer2CurrentScore,
  (currentScore: number) => ({
    payload: currentScore,
  }),
);

export const setTotalScore = (player: PlayerNumber) => createAction(
  actionTypeGenerator(player, PlayerActionType.SetTotalScore),
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

export const setActionStatus = createAction(
  ActionType.SetActionStatus,
  (actionStatus: ActionStatus) => ({
    payload: actionStatus,
  }),
);
