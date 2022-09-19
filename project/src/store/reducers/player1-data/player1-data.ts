import { createReducer } from "@reduxjs/toolkit";
import { DEFAULT_CURRENT_SCORE, DEFAULT_TOTAL_SCORE } from "../../../const";
import { Player1Data } from "../../../types/player-data";
import { setPlayer1CurrentScore } from "../action";

const initialState: Player1Data = {
  currentScore: DEFAULT_CURRENT_SCORE,
  totalScore: DEFAULT_TOTAL_SCORE,
};

const player1Data = createReducer(initialState, (builder) => {
  builder
  .addCase(setPlayer1CurrentScore, (state, action) => {
    state.currentScore = action.payload;
  });
});

export { player1Data }
