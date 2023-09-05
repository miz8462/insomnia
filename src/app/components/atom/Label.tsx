import { LabelProps } from "@/app/types/types";

const Label = (props: LabelProps) => {
  const { htmlFor, title } = props;
  return (
    <div>
      <label htmlFor={htmlFor}>{title}</label>
    </div>
  );
};

export default Label;
