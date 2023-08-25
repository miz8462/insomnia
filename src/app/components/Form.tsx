import { useState } from "react";
import SubmitButton from "./atom/SubmitButton";
import MorningFeeling from "./organisms/MorningFeeling";
import NumberOfAwaking from "./organisms/NumberOfAwaking";
import QualityOfSleep from "./organisms/QualityOfSleep";
import SleepTime from "./organisms/SleepTime";
import TimeForBed from "./organisms/TimeForBed";
import TimeOfAwaking from "./organisms/TimeOfAwaking";
import WakeUpTime from "./organisms/WakeUpTime";

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
    console.log(timeForBed);
    console.log(wakeUpTime);
    console.log(sleepTime);
    console.log(numberOfAwaking);
    console.log(timeOfAwaking);
    console.log(morningFeeling);
    console.log(qualityOfSleep);
  };
  return (
    <div>
      <form
        className="flex flex-col "
        action=""
        onSubmit={(e) => handleSubmit(e)}
      >
        <TimeForBed stateName={timeForBed} setState={setTimeForBed} />
        <WakeUpTime stateName={wakeUpTime} setState={setWakeUpTime} />
        <SleepTime stateName={sleepTime} setState={setSleepTime} />
        <NumberOfAwaking
          stateName={numberOfAwaking}
          setState={setNumberOfAwaking}
        />
        <TimeOfAwaking stateName={timeOfAwaking} setState={setTimeOfAwaking} />
        <MorningFeeling
          stateName={morningFeeling}
          setState={setMorningFeeling}
        />
        <QualityOfSleep
          stateName={qualityOfSleep}
          setState={setQualityOfSleep}
        />
        <SubmitButton />
      </form>
    </div>
  );
};

export default Form;
