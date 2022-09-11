export enum ActionType {
  SetFinalScore = 'main/setFinalScore',
  SetActivePlayer = 'main/setActivePlayer',
  SetCurrentScore1 = 'player1/setCurrentScore',
  SetCurrentScore2 = 'player2/setCurrentScore',
  SetTotalScore  = 'game/setTotalScore',
  SetDiceShow = 'main/setDiceShow',
};

export const actionTypeGenerator = (action: string, player: number): string => `player${player}/${action}`;
