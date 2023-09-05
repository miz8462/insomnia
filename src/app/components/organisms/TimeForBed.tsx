import { UseStateStringProps } from "@/app/types/types";
import LabelAndInputString from "../molecules/LabelAndInput";

const TimeForBed = (props: UseStateStringProps) => {
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
