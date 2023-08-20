import { Dispatch, SetStateAction } from "react";

type InputStringProps = {
  type: string;
  id: string;
  name: string;
  stateName: string;
  setState: Dispatch<SetStateAction<string>>;
};

const InputString = (props: InputStringProps) => {
  const { type, id, name, stateName, setState } = props;
  return (
    <div>
      <input
        onChange={(e) => setState(e.target.value)}
        value={stateName}
        type={type}
        id={id}
        name={name}
        required
      />
    </div>
  );
};

export default InputString;
