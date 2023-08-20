import { InputNumberProps } from "../../types/types";
import LabelAndInputNumber from "../molecules/LabelAndInputNumber";

const QualityOfSleep = (props: InputNumberProps) => {
  const { stateName, setState } = props;
  return (
    <div>
      <LabelAndInputNumber
        type={"number"}
        id={"quality-of-sleep"}
        name={"quality-of-sleep"}
        title={"睡眠の質(5段階評価)"}
        htmlFor={"quality-of-sleep"}
        stateName={stateName}
        setState={setState}
        min={1}
        max={5}
      />
    </div>
  );
};

export default QualityOfSleep;
