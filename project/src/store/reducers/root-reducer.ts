import { combineReducers } from "@reduxjs/toolkit";
import { PlayerNumber } from "../../const";
import { appState } from "./app-state/app-state";
import { playerData } from "./player-data/player-data";

export enum NameSpace {
  state = 'STATE',
  player1 = 'PLAYER1_DATA',
  player2 = 'PLAYER2_DATA',
}

export const rootReducer = combineReducers({
  [NameSpace.state]: appState,
  [NameSpace.player1]: playerData(PlayerNumber.Player1),
  [NameSpace.player2]: playerData(PlayerNumber.Player2),
});

export type RootState = ReturnType<typeof rootReducer>;
