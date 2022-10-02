import { ActionStatus } from "../../../const";
import { State } from "../../../types/state";
import { NameSpace } from "../root-reducer";

export const getFinalScore = (state: State): number => state[NameSpace.state].finalScore;
export const getActivePlayer = (state: State): number => state[NameSpace.state].activePlayer;
export const getActionStatus = (state: State): ActionStatus => state[NameSpace.state].actionStatus;
