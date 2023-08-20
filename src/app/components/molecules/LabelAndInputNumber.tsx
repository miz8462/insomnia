import { Dispatch, SetStateAction } from "react";
import InputNumber from "../atom/InputNumber";
import Label from "../atom/Label";

type LabelAndInputNumberProps = {
  type: string;
  id: string;
  name: string;
  title: string;
  htmlFor: string;
  stateName: number;
  setState: Dispatch<SetStateAction<number>>;
  min?: number;
  max?: number;
};

const LabelAndInputNumber = (props: LabelAndInputNumberProps) => {
  const { type, id, name, title, htmlFor, stateName, setState, min, max } =
    props;
  return (
    <div className="flex flex-col  w-60 py-2">
      <Label htmlFor={htmlFor} title={title} />
      <InputNumber
        type={type}
        id={id}
        name={name}
        stateName={stateName}
        setState={setState}
        min={min}
        max={max}
      />
    </div>
  );
};

export default LabelAndInputNumber;
