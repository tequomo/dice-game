// import { Reducer } from "@reduxjs/toolkit";
import { PlayerNumber } from "../../../const";
// import { ActionType } from "../../../types/action";
import { State } from "../../../types/state";
// import { NameSpace } from "../root-reducer";

// export const getPlayer1CurrentScore = (state: State): number => state[NameSpace.player1].currentScore;
// export const getPlayer1TotalScore = (state: State): number => state[NameSpace.player1].totalScore;

export const getPlayerCurrentScore = (player: PlayerNumber) => (state: State): number => state[`PLAYER${player}_DATA`].currentScore;
export const getPlayerTotalScore = (player: PlayerNumber) => (state: State): number => state[`PLAYER${player}_DATA`].totalScore;

// export enum DetailStatus {
//   IN_WAREHOUSE = 'in_warehouse',
//   IN_SERVER = 'in_server',
//   WRITTEN_OFF = 'written_off',
//   RESERVED = 'reserved',
//   REPAIR = 'under_repair',
//   LABORATORY = 'in_laboratory',
//   BROKEN = 'broken',
// }

// export type DetailType = 'cpu' | 'ram' | 'pci' | 'storage';

// export type DetailCountInfo = {
//   [type in DetailType]: {
//     [status in DetailStatus]: number;
//   };
// };


// const withInitialState = (initialState: State) => (reducer: Reducer) => {
//   return (state = initialState, action: ActionType) => reducer(state, action)
// }
