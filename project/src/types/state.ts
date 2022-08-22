import { RootState } from "../store/reducers/root-reducer";

export type AppState = {
  finalScore: number,
  activePlayer: number,
}

export type State = RootState;
