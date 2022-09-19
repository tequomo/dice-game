export enum ActionType {
  SetFinalScore = 'main/setFinalScore',
  SetActivePlayer = 'main/setActivePlayer',
  SetPlayer1CurrentScore = 'player1/setCurrentScore',
  SetPlayer2CurrentScore = 'player2/setCurrentScore',
  SetTotalScore  = 'game/setTotalScore',
  SetDiceShow = 'main/setDiceShow',
};

export enum MainStateActionType {
  SetFinalScore = 'main/setFinalScore',
  SetActivePlayer = 'main/setActivePlayer',
  SetDiceShow = 'main/setDiceShow',
};

export enum PlayerActionType {
  SetCurrentScore = 'setCurrentScore',
  SetTotalScore  = 'setTotalScore',
};
