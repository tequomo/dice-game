import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setFinalScore } from "../../store/reducers/action";

function FinalScore(): JSX.Element {

const [score, setScore] = useState<string>('');

const dispatch = useDispatch();

const handleChangeScore = (e: ChangeEvent<HTMLInputElement>): void => {
  setScore(() => e.target.value)
};

const changeFinalScore = (): void => {
  dispatch(setFinalScore(+score));
}

  return (
    <input
    className="controls__final-score"
    type="text"
    placeholder="final score"
    value={score}
    onChange={handleChangeScore}
    onBlur={changeFinalScore}/>
  );
};

export default FinalScore;
