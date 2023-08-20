import { UseStateNumberProps } from "@/app/types/types";
import LabelAndInputNumber from "../molecules/LabelAndInputNumber";

const MorningFeeling = (props: UseStateNumberProps) => {
  const { stateName, setState } = props;
  return (
    <div>
      <LabelAndInputNumber
        type={"number"}
        id={"morning-feeling"}
        name={"morning-feeling"}
        title={"起きた時の気分(5段階)"}
        htmlFor={"morning-feeling"}
        stateName={stateName}
        setState={setState}
        min={1}
        max={5}
      />
    </div>
  );
};

export default MorningFeeling;
