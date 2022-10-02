import { ActionStatus } from "../const";
import { RootState } from "../store/reducers/root-reducer";

export type AppState = {
  finalScore: number,
  activePlayer: number,
  actionStatus: ActionStatus,
  diceShow: boolean,
}

export type State = RootState;
