import { Dispatch, SetStateAction } from "react";
import Input from "../atom/InputString";
import Label from "../atom/Label";

type LabelAndInputStringProps = {
  type: string;
  id: string;
  name: string;
  title: string;
  htmlFor: string;
  stateName: string;
  setState: Dispatch<SetStateAction<string>>;
};

const LabelAndInputString = (props: LabelAndInputStringProps) => {
  const { type, id, name, title, htmlFor, stateName, setState } =
    props;
  return (
    <div className="flex flex-col  w-60 py-2">
      <Label htmlFor={htmlFor} title={title} />
      <Input
        type={type}
        id={id}
        name={name}
        stateName={stateName}
        setState={setState}
      />
    </div>
  );
};

export default LabelAndInputString;
