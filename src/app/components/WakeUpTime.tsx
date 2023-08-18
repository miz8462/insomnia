const WakeUpTime = (props: any) => {
  const { wakeUpTime, setWakeUpTime } = props;
  return (
    <div>
      <label htmlFor="wake-up-time">布団から出た時間</label>
      <input
        onChange={(e) => setWakeUpTime(e.target.value)}
        value={wakeUpTime}
        type="time"
        id="wake-up-time"
        name="wake-up-time"
        required
      />
    </div>
  );
};

export default WakeUpTime;
