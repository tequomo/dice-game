import { createReducer } from "@reduxjs/toolkit";
import { DefaultScoreValue } from "../../../const";
import { Player1Data } from "../../../types/player-data";
import { setPlayer1CurrentScore } from "../action";

const initialState: Player1Data = {
  currentScore: DefaultScoreValue.Current,
  totalScore: DefaultScoreValue.Total,
};

const player1Data = createReducer(initialState, (builder) => {
  builder
  .addCase(setPlayer1CurrentScore, (state, action) => {
    state.currentScore = action.payload;
  });
});

export { player1Data }
