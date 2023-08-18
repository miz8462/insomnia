const SleepTime = (props: any) => {
  const { sleepTime, setSleepTime } = props;
  return (
    <div>
      <label htmlFor="sleep-time">寝付くのにかかった時間（分）</label>
      <input
        onChange={(e) => setSleepTime(Number(e.target.value))}
        value={sleepTime}
        type="number"
        min="0"
        max="1000"
        id="sleep-time"
        name="sleep-time"
        required
      />
    </div>
  );
};

export default SleepTime;
