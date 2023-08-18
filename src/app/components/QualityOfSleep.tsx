const QualityOfSleep = (props: any) => {
  const { qualityOfSleep, setQualityOfSleep } = props;
  return (
    <div>
      <label htmlFor="quality-of-sleep">睡眠の質（5段階評価）</label>
      <input
        onChange={(e) => setQualityOfSleep(Number(e.target.value))}
        value={qualityOfSleep}
        type="number"
        min="1"
        max="5"
        id="quality-of-sleep"
        name="quality-of-sleep"
        required
      />
    </div>
  );
};

export default QualityOfSleep;
