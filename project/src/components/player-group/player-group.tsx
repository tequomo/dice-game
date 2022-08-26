import { useSelector } from "react-redux";
import { PlayerNumber } from "../../const";
import { getPlayer1CurrentScore, getPlayer1TotalScore } from "../../store/reducers/player1-data/selectors";
import { getPlayer2CurrentScore, getPlayer2TotalScore } from "../../store/reducers/player2-data/selectors";
import PlayerInfo from "../player-info/player-info";

function PlayerGroup(): JSX.Element {

  const player1CurrentScore = useSelector(getPlayer1CurrentScore);
  const player1TotalScore = useSelector(getPlayer1TotalScore);

  const player2CurrentScore = useSelector(getPlayer2CurrentScore);
  const player2TotalScore = useSelector(getPlayer2TotalScore);

  return (
    <div className="player-group">
      <PlayerInfo playerNumber={PlayerNumber.Player1} currentScore={player1CurrentScore} totalScore={player1TotalScore}/>
      <PlayerInfo playerNumber={PlayerNumber.Player2} currentScore={player2CurrentScore} totalScore={player2TotalScore}/>
    </div>
  );
};

export default PlayerGroup;
