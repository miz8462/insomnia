// props: anyは要修正

import Label from "./Label";



const TimeForBed = (props: any) => {
  const { timeForBed, setTimeForBed } = props;
  return (
    <div className="flex flex-col  w-60 py-4">
      <Label htmlFor="time-for-bed" title={"布団に入った時間"} />
      
      <input
        onChange={(e) => setTimeForBed(e.target.value)}
        value={timeForBed}
        type="time"
        id="time-for-bed"
        name="time-for-bed"
        required
      />
    </div>
  );
};

export default TimeForBed;
