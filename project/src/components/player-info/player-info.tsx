import { useSelector } from "react-redux";
import { ACTIVE_PLAYER_CLASS } from "../../const";
import { getActivePlayer } from "../../store/reducers/app-state/selectors";

type PlayerInfoPropsType = {
  playerNumber: number,
  currentScore: number,
  totalScore: number,
};

function PlayerInfo({ playerNumber, currentScore, totalScore }: PlayerInfoPropsType): JSX.Element {

  const activePlayer = useSelector(getActivePlayer);

  return (
    <div className={`player-info player${playerNumber} ${activePlayer === playerNumber ? ACTIVE_PLAYER_CLASS : ''}`}>
    <div className="player-info__title">Player {playerNumber}</div>
    <div className="player-info__total-score">{totalScore}</div>
    <div className="player-info current-score">
      <h3 className="current-score__title">Current</h3>
      <span className="current-score__value">{currentScore}</span>
    </div>
  </div>
  );
};

export default PlayerInfo;
