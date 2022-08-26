import { createReducer } from "@reduxjs/toolkit";
import { DEFAULT_CURRENT_SCORE, DEFAULT_TOTAL_SCORE } from "../../../const";
import { PlayerData } from "../../../types/player-data";
import { setCurrentScore } from "../action";

const initialState: PlayerData = {
  currentScore: DEFAULT_CURRENT_SCORE,
  totalScore: DEFAULT_TOTAL_SCORE,
};

const player2Data = createReducer(initialState, (builder) => {
  builder
  .addCase(setCurrentScore, (state, action) => {
    state.currentScore = action.payload;
  });
});

export { player2Data }
