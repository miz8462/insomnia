const TimeOfAwaking = (props: any) => {
  const { timeOfAwaking, setTimeOfAwaking } = props;
  return (
    <div>
      <label htmlFor="time-of-awaking">夜中に目覚めていた時間（分）</label>
      <input
        onChange={(e) => setTimeOfAwaking(Number(e.target.value))}
        value={timeOfAwaking}
        type="number"
        min="0"
        max="1000"
        id="time-of-awaking"
        name="time-of-awaking"
        required
      />
    </div>
  );
};

export default TimeOfAwaking;
