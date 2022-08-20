import { createAction } from "@reduxjs/toolkit";
import { ActionType } from "../../types/action";

export const setFinalScore = createAction(
  ActionType.SetFinalScore,
  (finalScore:number) => ({
    payload: finalScore,
  }),
);
