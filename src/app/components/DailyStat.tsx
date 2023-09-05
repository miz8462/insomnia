import { useEffect, useState } from "react";
import { UUID } from "uuidjs";
import { getNewSevenRecords } from "../../../utils/supabaseFunctions";
import { Record, Stat } from "../types/types";
type Props = {
  setShow: boolean;
};
const DailyStat = (props: Props) => {
  const { setShow } = props;
  const [records, setRecords] = useState<Record[]>([]);

  useEffect(() => {
    const getRecords = async () => {
      const records = await getNewSevenRecords();
      setRecords(records!);
    };
    getRecords();
  }, [setShow]);
  records.sort((a, b) => a.id - b.id);

  const statArr: Stat[] = [];
  records.map((datum) => {
    // 文字列の時間をNumber型に変更し計算できるようにする
    const strTimeToNum = (strTime: string): number => {
      const hour = strTime.slice(0, 2);
      const minutes = strTime.slice(3, 5);
      const totalMinutes = Number(hour) * 60 + Number(minutes);
      return totalMinutes;
    };
    // 総臥床時間：起きた時間 - 布団に入った時間
    const numWakeUpTime = strTimeToNum(datum.wakeUpTime);
    const numTimeToBed = strTimeToNum(datum.timeToBed);
    const totalTimeInBed =
      numWakeUpTime - numTimeToBed >= 0
        ? numWakeUpTime - numTimeToBed
        : numWakeUpTime - numTimeToBed + 24 * 60;
    // 総睡眠時間：総臥床時間 - (寝るまでの時間 + 目覚めていた時間)
    const totalSleepTime =
      totalTimeInBed - (datum.sleepTime + datum.timeOfAwaking);
    // 睡眠効率：総睡眠時間 / 総臥床時間
    const sleepRatio = Math.round((totalSleepTime / totalTimeInBed) * 100);
    // 計算結果で連想配列を作成
    const stat = {
      id: UUID.generate(),
      totalTimeInBed: totalTimeInBed,
      totalSleepTime: totalSleepTime,
      sleepRatio: sleepRatio,
    };
    statArr.push(stat);
  });

  // 週間平均を求める
  const getAverageRecords = (records: any) => {
    let sumTotalTimeInBed = 0;
    let sumTotalSleepTime = 0;
    let counter = 0;
    records.map((record: any) => {
      if (record.totalTimeInBed) {
        sumTotalTimeInBed += record.totalTimeInBed;
      }
      if (record.totalSleepTime) {
        sumTotalSleepTime += record.totalSleepTime;
      }
      counter += 1;
    });
    const averageRecords = {
      averageTotalTimeInBed:
        counter == 0 ? "-" : Math.round(sumTotalTimeInBed / counter),
      averageTotalSleepTime:
        counter == 0 ? "-" : Math.round(sumTotalSleepTime / counter),
      averageSleepRatio:
        counter == 0
          ? "-"
          : Math.round((sumTotalSleepTime / sumTotalTimeInBed) * 100),
    };
    return averageRecords;
  };

  const averageRecords = getAverageRecords(statArr);

  return (
    <div className="p-1">
      <table className="px-3 py-1 flex border-2 border-sky-600 rounded-lg">
        <thead className="pr-28 border-r-2 border-sky-600">
          <tr>
            <th className="truncate flex">総臥床時間</th>
            <th className="truncate flex">総睡眠時間</th>
            <th className="truncate flex">睡眠効率</th>
          </tr>
        </thead>
        <tbody className="flex">
          {statArr.map((stat) => (
            <tr className="px-3 border-l-2 border-sky-600" key={stat.id}>
              <th className="flex flex-col w-12">{stat.totalTimeInBed}</th>
              <th className="flex flex-col w-12">{stat.totalSleepTime}</th>
              <th className="flex flex-col w-12">{stat.sleepRatio}</th>
            </tr>
          ))}
        </tbody>
        <tfoot className="flex">
          <tr className="px-3 border-l-4 border-sky-600">
            <th className="flex flex-col w-12">
              {averageRecords.averageTotalTimeInBed}
            </th>
            <th className="flex flex-col w-12">
              {averageRecords.averageTotalSleepTime}
            </th>
            <th className="flex flex-col w-12">
              {averageRecords.averageSleepRatio}
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default DailyStat;
