import { useState } from "react";
import MorningFeeling from "./MorningFeeling";
import NumberOfAwaking from "./NumberOfAwaking";
import QualityOfSleep from "./QualityOfSleep";
import SleepTime from "./SleepTime";
import SubmitButton from "./SubmitButton";
import TimeForBed from "./TimeForBed";
import TimeOfAwaking from "./TimeOfAwaking";
import WakeUpTime from "./WakeUpTime";

const Form = () => {
  const [timeForBed, setTimeForBed] = useState<string>("00:00");
  const [wakeUpTime, setWakeUpTime] = useState<string>("07:00");
  const [sleepTime, setSleepTime] = useState<number>(0);
  const [numberOfAwaking, setNumberOfAwaking] = useState<number>(0);
  const [timeOfAwaking, setTimeOfAwaking] = useState<number>(0);
  const [morningFeeling, setMorningFeeling] = useState<number>(1);
  const [qualityOfSleep, setQualityOfSleep] = useState<number>(1);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(timeForBed);
    console.log(wakeUpTime);
    // console.log(typeof sleepTime);
    // console.log(sleepTime);
    // console.log(numberOfAwaking);
    // console.log(timeOfAwaking);
    // console.log(morningFeeling);
    // console.log(qualityOfSleep);
  };
  return (
    <div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <TimeForBed timeForBed={timeForBed} setTimeForBed={setTimeForBed} />
        <WakeUpTime wakeUpTime={wakeUpTime} setWakeUpTime={setWakeUpTime} />
        <SleepTime sleepTime={sleepTime} setSleepTime={setSleepTime} />
        <NumberOfAwaking
          numberOfAwaking={numberOfAwaking}
          setNumberOfAwaking={setNumberOfAwaking}
        />
        <TimeOfAwaking
          timeOfAwaking={timeOfAwaking}
          setTimeOfAwaking={setTimeOfAwaking}
        />
        <MorningFeeling
          morningFeeling={morningFeeling}
          setMorningFeeling={setMorningFeeling}
        />
        <QualityOfSleep
          qualityOfSleep={qualityOfSleep}
          setQualityOfSleep={setQualityOfSleep}
        />
        <SubmitButton />
      </form>
    </div>
  );
};

export default Form;
