import { FormEvent, useState } from "react";
import { addRecord } from "../../../utils/supabaseFunctions";
import Button from "./atom/Button";
import MorningFeeling from "./organisms/MorningFeeling";
import NumberOfAwaking from "./organisms/NumberOfAwaking";
import QualityOfSleep from "./organisms/QualityOfSleep";
import SleepTime from "./organisms/SleepTime";
import TimeForBed from "./organisms/TimeForBed";
import TimeOfAwaking from "./organisms/TimeOfAwaking";
import WakeUpTime from "./organisms/WakeUpTime";
import Link from "next/link";

type Props = {
  buttonText: string;
};

const Form = (props: Props) => {
  const { buttonText } = props;
  const [timeToBed, setTimeToBed] = useState<string>("00:00");
  const [wakeUpTime, setWakeUpTime] = useState<string>("07:00");
  const [sleepTime, setSleepTime] = useState<number>(0);
  const [numberOfAwaking, setNumberOfAwaking] = useState<number>(0);
  const [timeOfAwaking, setTimeOfAwaking] = useState<number>(0);
  const [morningFeeling, setMorningFeeling] = useState<number>(1);
  const [qualityOfSleep, setQualityOfSleep] = useState<number>(1);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addRecord(
      timeToBed,
      wakeUpTime,
      sleepTime,
      numberOfAwaking,
      timeOfAwaking,
      morningFeeling,
      qualityOfSleep
    );
    // ページ遷移
    document.location.href = "/table"
  };

  return (
    <div>
      <form
        className="flex flex-col"
        action=""
        onSubmit={(e) => handleSubmit(e)}
      >
        <TimeForBed stateName={timeToBed} setState={setTimeToBed} />
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
        <Button>{buttonText}</Button>
      </form>
    </div>
  );
};

export default Form;
