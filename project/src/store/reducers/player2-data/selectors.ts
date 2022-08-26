import { State } from "../../../types/state";
import { NameSpace } from "../root-reducer";

export const getPlayer2CurrentScore = (state: State): number => state[NameSpace.player2].currentScore;
export const getPlayer2TotalScore = (state: State): number => state[NameSpace.player2].totalScore;
