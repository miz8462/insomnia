import { InputNumberProps } from "@/app/types";
import LabelAndInputNumber from "../molecules/LabelAndInputNumber";

const SleepTime = (props: InputNumberProps) => {
  const { stateName, setState } = props;
  return (
    <div>
      <LabelAndInputNumber
        type={"number"}
        id={"sleep-time"}
        name={"sleep-time"}
        title={"眠るまでの時間(分)"}
        htmlFor={"sleep-time"}
        stateName={stateName}
        setState={setState}
        min={0}
        max={1000}
      />
    </div>
  );
};

export default SleepTime;
