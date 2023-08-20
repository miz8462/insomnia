import { UseStateNumberProps } from "@/app/types/types";
import LabelAndInputNumber from "../molecules/LabelAndInputNumber";

const TimeOfAwaking = (props: UseStateNumberProps) => {
  const { stateName, setState } = props;
  return (
    <div>
      <LabelAndInputNumber
        type={"number"}
        id={"time-of-awaking"}
        name={"time-of-awaking"}
        title={"夜中に目覚めていた時間(分)"}
        htmlFor={"time-of-awaking"}
        stateName={stateName}
        setState={setState}
        min={0}
        max={1000}
      />
    </div>
  );
};

export default TimeOfAwaking;
