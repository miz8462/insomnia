import { UseStateStringProps } from "@/app/types/types";
import LabelAndInputString from "../molecules/LabelAndInput";

const WakeUpTime = (props: UseStateStringProps) => {
  const { stateName, setState } = props;
  return (
    <div>
      <LabelAndInputString
        type={"time"}
        id={"wake-up-time"}
        name={"wake-up-time"}
        title={"布団から出た時間"}
        htmlFor={"wake-up-time"}
        stateName={stateName}
        setState={setState}
      />
    </div>
  );
};

export default WakeUpTime;
