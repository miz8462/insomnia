import { Dispatch, SetStateAction } from "react";
import LabelAndInputString from "../molecules/LabelAndInput";

type Props = {
  stateName: string;
  setState: Dispatch<SetStateAction<string>>;
};

const TimeForBed = (props: Props) => {
  const { stateName, setState } = props;
  return (
    <div>
      <LabelAndInputString
        type={"time"}
        id={"time-for-bed"}
        name={"time-for-bed"}
        title={"布団に入った時間"}
        htmlFor={"time-for-bed"}
        stateName={stateName}
        setState={setState}
      />
    </div>
  );
};

export default TimeForBed;
