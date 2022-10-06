import { createReducer } from "@reduxjs/toolkit";
import { DefaultScoreValue } from "../../../const";
import { Player2Data } from "../../../types/player-data";
import { setPlayer2CurrentScore } from "../action";

const initialState: Player2Data = {
  currentScore: DefaultScoreValue.Current,
  totalScore: DefaultScoreValue.Total,
};

const player2Data = createReducer(initialState, (builder) => {
  builder
  .addCase(setPlayer2CurrentScore, (state, action) => {
    state.currentScore = action.payload;
  });
});

export { player2Data }
