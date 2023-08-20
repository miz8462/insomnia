import { InputNumberProps } from "@/app/types/types";
import LabelAndInputNumber from "../molecules/LabelAndInputNumber";

const NumberOfAwaking = (props: InputNumberProps) => {
  const { stateName, setState } = props;
  return (
    <div>
      <LabelAndInputNumber
        type={"number"}
        id={"number-of-awaking"}
        name={"number-of-awaking"}
        title={"夜中に目覚めた回数"}
        htmlFor={"number-of-awaking"}
        stateName={stateName}
        setState={setState}
        min={0}
        max={1000}
      />
    </div>
  );
};

export default NumberOfAwaking;
