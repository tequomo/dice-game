import { createReducer } from "@reduxjs/toolkit";
import { DEFAULT_CURRENT_SCORE, DEFAULT_TOTAL_SCORE } from "../../../const";
import { Player2Data } from "../../../types/player-data";
import { setPlayer2CurrentScore } from "../action";

const initialState: Player2Data = {
  currentScore: DEFAULT_CURRENT_SCORE,
  totalScore: DEFAULT_TOTAL_SCORE,
};

const player2Data = createReducer(initialState, (builder) => {
  builder
  .addCase(setPlayer2CurrentScore, (state, action) => {
    state.currentScore = action.payload;
  });
});

export { player2Data }
