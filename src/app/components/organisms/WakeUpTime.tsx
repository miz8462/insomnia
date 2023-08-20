import { Dispatch, SetStateAction } from "react";
import LabelAndInputString from "../molecules/LabelAndInput";
import LabelAndInput from "../molecules/LabelAndInput";

type Props = {
  stateName: string;
  setState:Dispatch<SetStateAction<string>>;
};

const WakeUpTime = (props: Props) => {
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
