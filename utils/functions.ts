import { Record } from "@/app/types/types";

export const strTimeToNum = (strTime: string): number => {
  const hour = strTime.slice(0, 2);
  const minutes = strTime.slice(3, 5);
  const totalMinutes = Number(hour) * 60 + Number(minutes);
  return totalMinutes;
};

export const numToStrTime = (numMinutes: number) => {
  const hour = Math.floor(numMinutes / 60);
  const minutes = numMinutes % 60;
  const strHour = hour < 10 ? "0" + String(hour) : String(hour);
  const strMinutes = minutes < 10 ? "0" + String(minutes) : String(minutes);
  return strHour + ":" + strMinutes;
};

export const getAverageRecords = (records: Record[]) => {
  let sumTimeToBed = 0;
  let sumWakeUpTime = 0;
  let sumSleepTime = 0;
  let sumNumberOfAwaking = 0;
  let sumTimeOfAwaking = 0;
  let sumMorningFeeling = 0;
  let sumQualityOfSleep = 0;
  let countDays = 0;
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
    countDays += 1;
  });
  const averageRecords = {
    averageTimeToBed:
      countDays == 0 ? "-" : numToStrTime(Math.round(sumTimeToBed / countDays)),
    averageWakeUpTime:
      countDays == 0
        ? "-"
        : numToStrTime(Math.round(sumWakeUpTime / countDays)),
    averageSleepTime:
      countDays == 0 ? "-" : Math.round(sumSleepTime / countDays),
    averageNumberOfAwaking:
      countDays == 0 ? "-" : Math.round(sumNumberOfAwaking / countDays),
    averageTimeOfAwaking:
      countDays == 0 ? "-" : Math.round(sumTimeOfAwaking / countDays),
    averageMorningFeeling:
      countDays == 0
        ? "-"
        : Math.round((sumMorningFeeling / countDays) * 10) / 10,
    averageQualityOfSleep:
      countDays == 0
        ? "-"
        : Math.round((sumQualityOfSleep / countDays) * 10) / 10,
  };
  return averageRecords;
};

export const formatRecords = (records: Record[]): Record[] => {
  records.map((record) => {
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
  return records;
};
