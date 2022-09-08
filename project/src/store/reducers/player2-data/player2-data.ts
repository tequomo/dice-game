import { createReducer } from "@reduxjs/toolkit";
import { DEFAULT_CURRENT_SCORE, DEFAULT_TOTAL_SCORE } from "../../../const";
import { Player2Data } from "../../../types/player-data";
import { setCurrentScore2 } from "../action";

const initialState: Player2Data = {
  currentScore: DEFAULT_CURRENT_SCORE,
  totalScore: DEFAULT_TOTAL_SCORE,
};

const player2Data = createReducer(initialState, (builder) => {
  builder
  .addCase(setCurrentScore2, (state, action) => {
    state.currentScore = action.payload;
  });
});

export { player2Data }
