import { Record } from "./types/types";
// Todo: any型を直す
const RecordList = (props: any) => {
  const { records } = props;
  console.log(records);

  return (
  <ul>
    {records.map((record: Record) => (
      <div key={record.id}>
        <li>{record.created_at}</li>
        <li>{record.time_to_bed}</li>
        <li>{record.wake_up_time}</li>
        <li>{record.number_of_awaking}</li>
        <li>{record.sleep_time}</li>
        <li>{record.time_of_awaking}</li>
        <li>{record.morning_feeling}</li>
        <li>{record.quality_of_sleep}</li>
      </div>
    ))}
  </ul>
  );
};

export default RecordList;
