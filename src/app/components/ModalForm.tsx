import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { formatRecords } from "../../../utils/functions";
import {
  deleteRecord,
  getNewSevenRecords,
  getRecordById,
  updateRecord,
} from "../../../utils/supabaseFunctions";
import { Record } from "../types/types";
import Button from "./atom/Button";
import MorningFeeling from "./organisms/MorningFeeling";
import NumberOfAwaking from "./organisms/NumberOfAwaking";
import QualityOfSleep from "./organisms/QualityOfSleep";
import SleepTime from "./organisms/SleepTime";
import TimeForBed from "./organisms/TimeForBed";
import TimeOfAwaking from "./organisms/TimeOfAwaking";
import WakeUpTime from "./organisms/WakeUpTime";

type Props = {
  id: number;
  setShow: Dispatch<SetStateAction<boolean>>;
  setRecords: Dispatch<SetStateAction<Record[]>>;
};

const ModalForm = (props: Props) => {
  const { id, setShow, setRecords } = props;
  const [record, setRecord] = useState<Record[]>([]);
  const [timeToBed, setTimeToBed] = useState<string>("00:00");
  const [wakeUpTime, setWakeUpTime] = useState<string>("07:00");
  const [sleepTime, setSleepTime] = useState<number>(0);
  const [numberOfAwaking, setNumberOfAwaking] = useState<number>(0);
  const [timeOfAwaking, setTimeOfAwaking] = useState<number>(0);
  const [morningFeeling, setMorningFeeling] = useState<number>(1);
  const [qualityOfSleep, setQualityOfSleep] = useState<number>(1);

  useEffect(() => {
    const getRecord = async (id: number) => {
      const record = await getRecordById(id);
      setRecord(record!);
    };
    getRecord(id);
  }, [id]);
  const formattedRecords = formatRecords(record);
  useEffect(() => {
    formattedRecords.map((record) => {
      setTimeToBed(record.timeToBed);
      setWakeUpTime(record.wakeUpTime);
      setSleepTime(record.sleepTime);
      setNumberOfAwaking(record.numberOfAwaking);
      setTimeOfAwaking(record.timeOfAwaking);
      setMorningFeeling(record.morningFeeling);
      setQualityOfSleep((record.qualityOfSleep));;
    });
  }, [formattedRecords]);
  console.log(sleepTime);
  
  const updateRecordModal = async () => {
    await updateRecord(
      id,
      timeToBed,
      wakeUpTime,
      sleepTime,
      numberOfAwaking,
      timeOfAwaking,
      morningFeeling,
      qualityOfSleep
    );
    setShow(false);
    const newRecords: any = await getNewSevenRecords();
    setRecords(newRecords);
  };

  const closeModal = () => {
    setShow(false);
  };

  const deleteRecordModal = async () => {
    deleteRecord(id);
    setShow(false);
    const newRecords: any = await getNewSevenRecords();
    setRecords(newRecords);
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
      onClick={closeModal}
    >
      <div
        className="z-10 w-1/2 h-full p-4 bg-sky-300 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <form className="flex flex-col  items-center justify-center" action="" onSubmit={updateRecordModal}>
          <TimeForBed stateName={timeToBed} setState={setTimeToBed} />
          <WakeUpTime stateName={wakeUpTime} setState={setWakeUpTime} />
          <SleepTime stateName={sleepTime} setState={setSleepTime} />
          <NumberOfAwaking
            stateName={numberOfAwaking}
            setState={setNumberOfAwaking}
          />
          <TimeOfAwaking
            stateName={timeOfAwaking}
            setState={setTimeOfAwaking}
          />
          <MorningFeeling
            stateName={morningFeeling}
            setState={setMorningFeeling}
          />
          <QualityOfSleep
            stateName={qualityOfSleep}
            setState={setQualityOfSleep}
          />
          <Button>変更</Button>
        </form>
        <div className="mt-3">
          <Button onClick={deleteRecordModal}>削除</Button>
        </div>
        <div className="mt-3">
          <Button onClick={closeModal}>キャンセル</Button>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
