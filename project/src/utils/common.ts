import { PlayerActionType } from '../types/action';

export const actionTypeGenerator = (player: number, action: PlayerActionType): string => `player${player}/${action}`;
