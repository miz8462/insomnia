type InputProps = {
  timeForBed: string;
  setTimeForBed: (timeForBed: string) => void;
}

const Input = (props: InputProps) => {
  const { timeForBed, setTimeForBed } = props;
  return (
    <div>
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

export default Input;
