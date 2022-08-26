import { createReducer } from "@reduxjs/toolkit";
import { DEFAULT_ACTIVE_PLAYER, DEFAULT_DICE_SHOW, DEFAULT_FINAL_SCORE } from "../../../const";
import { AppState } from "../../../types/state";
import { setActivePlayer, setFinalScore } from "../action";

const initialState:AppState = {
  finalScore: DEFAULT_FINAL_SCORE,
  activePlayer: DEFAULT_ACTIVE_PLAYER,
  diceShow: DEFAULT_DICE_SHOW,
};

const appState = createReducer(initialState, (builder) => {
  builder
  .addCase(setFinalScore, (state, action) => {
    state.finalScore = action.payload;
  })
  .addCase(setActivePlayer, (state, action) => {
    state.activePlayer = action.payload;
  });
});

export { appState };
