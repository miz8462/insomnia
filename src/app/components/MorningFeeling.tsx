const MorningFeeling = (props: any) => {
  const { morningFeeling, setMorningFeeling } = props;
  return (
    <div>
      <label htmlFor="morning-feeling">朝の気分（5段階評価）</label>
      <input
        onChange={(e) => setMorningFeeling(Number(e.target.value))}
        value={morningFeeling}
        type="number"
        min="1"
        max="5"
        id="morning-feeling"
        name="morning-feeling"
        required
      />
    </div>
  );
};

export default MorningFeeling;
