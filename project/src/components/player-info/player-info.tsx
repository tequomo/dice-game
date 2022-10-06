import { useSelector } from "react-redux";
import { InfoTitle, PlayerStyle } from "../../const";
import { getActivePlayer, getFinalScore } from "../../store/reducers/app-state/selectors";
import { getPlayerCurrentScore, getPlayerTotalScore } from "../../store/reducers/player-data/selectors";

type PlayerInfoPropsType = {
  playerNumber: number,
};

function PlayerInfo({ playerNumber }: PlayerInfoPropsType): JSX.Element {

  const activePlayer = useSelector(getActivePlayer);
  const finalScore = useSelector(getFinalScore);
  const currentScore = useSelector(getPlayerCurrentScore(playerNumber));
  const totalScore = useSelector(getPlayerTotalScore(playerNumber));

  const isWin = totalScore >= finalScore;

  return (
    <div className={`player-info player${playerNumber} ${activePlayer === playerNumber ? PlayerStyle.Active : ''}`}>
      <div className={`player-info__title ${isWin ? PlayerStyle.Win : ''}`}>{isWin ? InfoTitle.Winner : `${InfoTitle.Player} ${playerNumber}`}</div>
      <div className="player-info__total-score">{totalScore}</div>
      <div className="player-info current-score">
        <h3 className="current-score__title">Current</h3>
        <span className="current-score__value">{currentScore}</span>
      </div>
    </div>
  );
};

export default PlayerInfo;
