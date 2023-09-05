import { useEffect, useState } from "react";
import { UUID } from "uuidjs";
import { formatRecords, getAverageRecords } from "../../../utils/functions";
import { getNewSevenRecords } from "../../../utils/supabaseFunctions";
import { Record } from "../types/types";
import DailyStat from "./DailyStat";
import ModalForm from "./ModalForm";

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
  const [id, setId] = useState<number>(0);

  useEffect(() => {
    const getRecords = async () => {
      const records = await getNewSevenRecords();
      setRecords(records!);
    };
    getRecords();
  }, [showModifyModal]);
  records.sort((a, b) => a.id - b.id);
  // 表示するためにレコードの値をフォーマット
  const formattedRecords = formatRecords(records);
  // 週間平均を求める
  const averageRecords = getAverageRecords(formattedRecords);

  const onClickDate = (id: number) => {
    setShowModifyModal(true);
    setId(id);
  };
  return (
    <div>
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
                <th className="flex flex-col w-12">
                  {showModifyModal ? (
                    <>
                      <span
                        onClick={() => onClickDate(record.id)}
                        className="cursor-pointer"
                      >
                        {record.createdAt}
                      </span>
                      {showModifyModal && (
                        <ModalForm
                          id={id}
                          setShow={setShowModifyModal}
                          setRecords={setRecords}
                        />
                      )}
                    </>
                  ) : (
                    <span
                      onClick={() => onClickDate(record.id)}
                      className="cursor-pointer"
                    >
                      {record.createdAt}
                    </span>
                  )}
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
      <DailyStat setShow={showModifyModal} />
    </div>
  );
};

export default RecordTable;
