import { createReducer } from "@reduxjs/toolkit";
import { DEFAULT_CURRENT_SCORE, DEFAULT_TOTAL_SCORE, PlayerNumber } from "../../../const";
import { PlayerData } from "../../../types/player-data";
import { setCurrentScore, setTotalScore } from "../action";

const initialState: PlayerData = {
  currentScore: DEFAULT_CURRENT_SCORE,
  totalScore: DEFAULT_TOTAL_SCORE,
};

const playerData = (player: PlayerNumber) => createReducer(initialState, (builder) => {
  builder
  .addCase(setCurrentScore(player), (state, action) => {
    state.currentScore = action.payload;
  })
  .addCase(setTotalScore(player), (state, action) => {
    state.totalScore = action.payload;
  });
});

export { playerData }
