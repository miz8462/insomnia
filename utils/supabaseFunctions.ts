import { supabase } from "./supabase";

export const getAllRecords = async () => {
  const records = await supabase.from("INSOMNIA_RECORDS").select("*");
  return records.data;
};

export const addRecord = async (
  timeToBed: string,
  wakeUpTime: string,
  numberOfAwaking: number,
  sleepTime: number,
  timeOfAwaking: number,
  morningFeeling: number,
  qualityOfSleep: number
) => {
  console.log(timeToBed);

  await supabase
    .from("INSOMNIA_RECORDS")
    .insert({
      time_to_bed: timeToBed,
      wake_up_time: wakeUpTime,
      number_of_awaking: numberOfAwaking,
      sleep_time: sleepTime,
      time_of_awaking: timeOfAwaking,
      morning_feeling: morningFeeling,
      quality_of_sleep: qualityOfSleep,
    });
};
