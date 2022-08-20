import { combineReducers } from "@reduxjs/toolkit";
import { appState } from "./app-state/app-state";

export enum NameSpace {
  state = 'STATE',
}

export const rootReducer = combineReducers({
  [NameSpace.state]: appState,
});

export type RootState = ReturnType<typeof rootReducer>;
