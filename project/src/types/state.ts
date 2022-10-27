import { RootState } from "../store/reducers/root-reducer";

export type AppState = {
  finalScore: number,
  activePlayer: number,
  isRoundEnded: boolean,
}

export type State = RootState;
