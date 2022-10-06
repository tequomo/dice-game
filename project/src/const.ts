export const DEFAULT_ACTIVE_PLAYER = 2;
export const DEFAULT_DICE_VALUES = [0, 0];

export enum DefaultScoreValue {
  Final = 100,
  Current = 0,
  Total = 0,
};

export enum DiceValue {
  Min = 1,
  Max = 6,
  DoubleSix = 12,
};

export enum PlayerNumber {
  Player1 = 1,
  Player2 = 2,
};

export enum InfoTitle {
  Player = 'Player',
  Winner = 'Winner!!!',
};

export enum PlayerStyle {
  Active = 'player-info--current',
  Win = 'player-info__title--win',
};
