import { DiceValue } from "../const";

// export const getRandomInt = (min: number, max: number): number => min + Math.floor(Math.random() * (max - min + 1));
export const getRandomInt = (min: number, max: number): number => Math.floor(min + Math.random() * (max + 1 - min));

export const generateDiceValue = (): number => getRandomInt(DiceValue.Min, DiceValue.Max);

export const sumValues = (arr: number[]) => arr.reduce((a, b) => a + b);
