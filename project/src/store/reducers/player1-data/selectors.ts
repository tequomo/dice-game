import { State } from "../../../types/state";
import { NameSpace } from "../root-reducer";

export const getPlayer1CurrentScore = (state: State): number => state[NameSpace.player1].currentScore;
export const getPlayer1TotalScore = (state: State): number => state[NameSpace.player1].totalScore;
