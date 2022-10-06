import { createReducer } from "@reduxjs/toolkit";
import { DefaultScoreValue, DEFAULT_ACTIVE_PLAYER } from "../../../const";
import { AppState } from "../../../types/state";
import { setActivePlayer, setFinalScore } from "../action";

const initialState:AppState = {
  finalScore: DefaultScoreValue.Final,
  activePlayer: DEFAULT_ACTIVE_PLAYER,
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
