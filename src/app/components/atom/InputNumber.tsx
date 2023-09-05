import { InputNumberProps } from "@/app/types/types";

const InputNumber = (props: InputNumberProps) => {
  const { type, id, name, stateName, setState, min, max } = props;
  return (
    <div>
      <input
        onChange={(e) => setState(Number(e.target.value))}
        value={stateName}
        type={type}
        id={id}
        name={name}
        required
        min={min}
        max={max}
      />
    </div>
  );
};

export default InputNumber;
