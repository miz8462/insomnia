import { InputStringProps } from "@/app/types/types";

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
        className="w-16 text-right pr-1 rounded"
      />
    </div>
  );
};

export default InputString;
