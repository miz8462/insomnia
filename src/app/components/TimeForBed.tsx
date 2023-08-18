// props: anyは要修正

const TimeForBed = (props: any) => {
  const { timeForBed, setTimeForBed } = props;
  return (
    <div>
      <label htmlFor="time-for-bed">布団に入った時間</label>
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
