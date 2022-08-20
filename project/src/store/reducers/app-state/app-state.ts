import { createReducer } from "@reduxjs/toolkit";
import { DEFAULT_FINAL_SCORE } from "../../../const";
import { AppState } from "../../../types/state";
import { setFinalScore } from "../action";

const initialState:AppState = {
  finalScore: DEFAULT_FINAL_SCORE,
};

const appState = createReducer(initialState, (builder) => {
  builder
  .addCase(setFinalScore, (state, action) => {
    state.finalScore = action.payload;
  });
});

export { appState };
