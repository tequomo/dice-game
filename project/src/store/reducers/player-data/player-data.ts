import { createReducer } from "@reduxjs/toolkit";
import { DefaultScoreValue, PlayerNumber } from "../../../const";
import { PlayerData } from "../../../types/player-data";
import { setCurrentScore, setTotalScore } from "../action";

const initialState: PlayerData = {
  currentScore: DefaultScoreValue.Current,
  totalScore: DefaultScoreValue.Total,
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
