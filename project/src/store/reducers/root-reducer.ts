import { combineReducers } from "@reduxjs/toolkit";
import { appState } from "./app-state/app-state";
import { player1Data } from "./player1-data/player1-data";
import { player2Data } from "./player2-data/player2-data";

export enum NameSpace {
  state = 'STATE',
  player1 = 'PLAYER1_DATA',
  player2 = 'PLAYER2_DATA',
}

export const rootReducer = combineReducers({
  [NameSpace.state]: appState,
  [NameSpace.player1]: player1Data,
  [NameSpace.player2]: player2Data,
});

export type RootState = ReturnType<typeof rootReducer>;
