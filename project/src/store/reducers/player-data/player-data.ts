import { createReducer } from "@reduxjs/toolkit";
import { DEFAULT_CURRENT_SCORE, DEFAULT_TOTAL_SCORE } from "../../../const";
import { PlayerData } from "../../../types/player-data";
import { setPlayer2CurrentScore } from "../action";

const initialState: PlayerData = {
  currentScore: DEFAULT_CURRENT_SCORE,
  totalScore: DEFAULT_TOTAL_SCORE,
};

const playerData = createReducer(initialState, (builder) => {
  builder
  .addCase(setPlayer2CurrentScore, (state, action) => {
    state.currentScore = action.payload;
  });
});

export { playerData }
