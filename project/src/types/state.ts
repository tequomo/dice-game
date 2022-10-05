import { RootState } from "../store/reducers/root-reducer";

export type AppState = {
  finalScore: number,
  activePlayer: number,
  diceShow: boolean,
}

export type State = RootState;
