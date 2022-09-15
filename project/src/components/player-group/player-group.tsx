import { PlayerNumber } from "../../const";
import PlayerInfo from "../player-info/player-info";

function PlayerGroup(): JSX.Element {

  return (
    <div className="player-group">
      {
        (Object.values(PlayerNumber)
          .filter((value) => !isNaN(Number(value)))
        )
          .map
          (
            (number) => <PlayerInfo key={`player-${number}`} playerNumber={+number} />
          )
        // (Object.values(PlayerNumber) as Array<keyof typeof PlayerNumber>)
        //   .map
        //   (
        //     (number) => <PlayerInfo key={`player-${PlayerNumber[number]}`} playerNumber={PlayerNumber[number]} />
        //   )
      }
      {/* <PlayerInfo playerNumber={PlayerNumber.Player1} />
      <PlayerInfo playerNumber={PlayerNumber.Player2} /> */}
    </div>
  );
};

export default PlayerGroup;
