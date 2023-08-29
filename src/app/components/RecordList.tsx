import { Record } from "../types/types";
// Todo: any型を直す
const RecordList = (props: any) => {
  const { records } = props;

  return (
    <ul>
      {records.map((record: Record) => (
        <div key={record.id}>
          <li>{record.createdAt}</li>
          <li>{record.timeToBed}</li>
          <li>{record.wakeUpTime}</li>
          <li>{record.numberOfAwaking}</li>
          <li>{record.sleepTime}</li>
          <li>{record.timeOfAwaking}</li>
          <li>{record.morningFeeling}</li>
          <li>{record.qualityOfSleep}</li>
        </div>
      ))}
    </ul>
  );
};

export default RecordList;
