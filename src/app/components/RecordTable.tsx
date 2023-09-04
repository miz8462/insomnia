import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { UUID } from "uuidjs";
import { numToStrTime, strTimeToNum } from "../../../utils/functions";
import { getNewSevenRecords } from "../../../utils/supabaseFunctions";
import { Record } from "../types/types";
import ModifyModal from "./ModifyModal";

const columns = [
  "日付",
  "布団に入った時間",
  "布団から出た時間",
  "眠るまでの時間",
  "夜中に目覚めた回数",
  "夜中に目覚めていた時間",
  "起きた時の気分",
  "睡眠の質",
];

const RecordTable = () => {
  const [records, setRecords] = useState<Record[]>([]);
  const [showModifyModal, setShowModifyModal] = useState(false);
  
  useEffect(() => {
    const getRecords = async () => {
      const records = await getNewSevenRecords();
      setRecords(records!);
    };
    getRecords();
  }, [records]);
  records.sort((a, b) => a.id - b.id);
  // 表示するためにレコードの値をフォーマット
  const formattedRecords = records.map((record) => {
    Object.keys(record).map((data) => {
      if (data == "createdAt") {
        record[data] = record[data].slice(5, 10).replace("-", "/");
      }
      if (data == "timeToBed") {
        record[data] = record[data].slice(0, 5);
      }
      if (data == "wakeUpTime") {
        record[data] = record[data].slice(0, 5);
      }
    });
    return record;
  });
  // 週間平均を求める
  const getAverageRecords = (records: Record[]) => {
    let sumTimeToBed = 0;
    let sumWakeUpTime = 0;
    let sumSleepTime = 0;
    let sumNumberOfAwaking = 0;
    let sumTimeOfAwaking = 0;
    let sumMorningFeeling = 0;
    let sumQualityOfSleep = 0;
    let counter = 0;
    records.map((record: Record) => {
      if (record.timeToBed) {
        sumTimeToBed += strTimeToNum(record.timeToBed);
      }
      if (record.wakeUpTime) {
        sumWakeUpTime += strTimeToNum(record.wakeUpTime);
      }
      if (record.sleepTime) {
        sumSleepTime += record.sleepTime;
      }
      if (record.numberOfAwaking) {
        sumNumberOfAwaking += record.numberOfAwaking;
      }
      if (record.timeOfAwaking) {
        sumTimeOfAwaking += record.timeOfAwaking;
      }
      if (record.morningFeeling) {
        sumMorningFeeling += record.morningFeeling;
      }
      if (record.qualityOfSleep) {
        sumQualityOfSleep += record.qualityOfSleep;
      }
      counter += 1;
    });
    const averageRecords = {
      averageTimeToBed:
        counter == 0 ? "-" : numToStrTime(Math.round(sumTimeToBed / counter)),
      averageWakeUpTime:
        counter == 0 ? "-" : numToStrTime(Math.round(sumWakeUpTime / counter)),
      averageSleepTime: counter == 0 ? "-" : Math.round(sumSleepTime / counter),
      averageNumberOfAwaking:
        counter == 0 ? "-" : Math.round(sumNumberOfAwaking / counter),
      averageTimeOfAwaking:
        counter == 0 ? "-" : Math.round(sumTimeOfAwaking / counter),
      averageMorningFeeling:
        counter == 0
          ? "-"
          : Math.round((sumMorningFeeling / counter) * 10) / 10,
      averageQualityOfSleep:
        counter == 0
          ? "-"
          : Math.round((sumQualityOfSleep / counter) * 10) / 10,
    };
    return averageRecords;
  };

  const averageRecords = getAverageRecords(formattedRecords);

  return (
    <div className="p-1">
      <table className="px-3 py-1 flex border-2 border-sky-600 rounded-lg">
        <thead className="pr-4 border-r-2 border-sky-600">
          {columns.map((column) => (
            <tr className="pr-28" key={UUID.generate()}>
              <th className="truncate flex">{column}</th>
            </tr>
          ))}
        </thead>
        <tbody className="flex">
          {formattedRecords.map((record) => (
            <tr className="px-3 border-l-2 border-sky-600" key={record.id}>
              <th className="flex flex-col w-12" onClick={() => setShowModifyModal(!showModifyModal)}>
                {record.createdAt}
                <ModifyModal show={showModifyModal} setShow={setShowModifyModal} />
              </th>
              <th className="flex flex-col w-12">{record.timeToBed}</th>
              <th className="flex flex-col w-12">{record.wakeUpTime}</th>
              <th className="flex flex-col w-12">{record.sleepTime}</th>
              <th className="flex flex-col w-12">{record.numberOfAwaking}</th>
              <th className="flex flex-col w-12">{record.timeOfAwaking}</th>
              <th className="flex flex-col w-12">{record.morningFeeling}</th>
              <th className="flex flex-col w-12">{record.qualityOfSleep}</th>
            </tr>
          ))}
        </tbody>
        <tfoot className="flex">
          <tr className="px-3 border-l-4 border-sky-600">
            <th className="flex flex-col w-12">平均</th>
            <th className="flex flex-col w-12">
              {averageRecords.averageTimeToBed}
            </th>
            <th className="flex flex-col w-12">
              {averageRecords.averageWakeUpTime}
            </th>
            <th className="flex flex-col w-12">
              {averageRecords.averageSleepTime}
            </th>
            <th className="flex flex-col w-12">
              {averageRecords.averageNumberOfAwaking}
            </th>
            <th className="flex flex-col w-12">
              {averageRecords.averageTimeOfAwaking}
            </th>
            <th className="flex flex-col w-12">
              {averageRecords.averageMorningFeeling}
            </th>
            <th className="flex flex-col w-12">
              {averageRecords.averageQualityOfSleep}
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default RecordTable;
