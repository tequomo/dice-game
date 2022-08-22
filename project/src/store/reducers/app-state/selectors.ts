import { State } from "../../../types/state";
import { NameSpace } from "../root-reducer";

export const getFinalScore = (state: State): number => state[NameSpace.state].finalScore;