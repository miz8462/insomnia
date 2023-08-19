const LabelAndInput = (props: any) => {
  const { timeForBed, setTimeForBed } = props;
  return (
    <div className="flex flex-col  w-60 py-4">
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

export default LabelAndInput;
