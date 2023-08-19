// props: anyは要修正

import Input from "./Input";
import Label from "./Label";



const TimeForBed = (props: any) => {
  const { timeForBed, setTimeForBed } = props;
  return (
    <div className="flex flex-col  w-60 py-4">
      <Label htmlFor="time-for-bed" title={"布団に入った時間"} />
      <Input timeForBed={timeForBed} setTimeForBed={setTimeForBed} />
    </div>
  );
};

export default TimeForBed;
