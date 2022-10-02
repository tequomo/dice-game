import { createReducer } from "@reduxjs/toolkit";
import { ActionStatus, DEFAULT_ACTIVE_PLAYER, DEFAULT_DICE_SHOW, DEFAULT_FINAL_SCORE } from "../../../const";
import { AppState } from "../../../types/state";
import { setActionStatus, setActivePlayer, setFinalScore } from "../action";

const initialState:AppState = {
  finalScore: DEFAULT_FINAL_SCORE,
  activePlayer: DEFAULT_ACTIVE_PLAYER,
  actionStatus: ActionStatus.Idle,
  diceShow: DEFAULT_DICE_SHOW,
};

const appState = createReducer(initialState, (builder) => {
  builder
  .addCase(setFinalScore, (state, action) => {
    state.finalScore = action.payload;
  })
  .addCase(setActivePlayer, (state, action) => {
    state.activePlayer = action.payload;
  })
  .addCase(setActionStatus, (state, action) => {
    state.actionStatus = action.payload;
  });
});

export { appState };
