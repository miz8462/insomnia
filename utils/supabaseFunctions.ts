import { supabase } from "./supabase";

export const getAllRecords = async () => {
  const records = await supabase.from("INSOMNIA_RECORDS").select("*");
  return records.data;
};

export const getNewSevenRecords = async () => {
  const records = await supabase
    .from("INSOMNIA_RECORDS")
    .select("*")
    .order("createdAt", { ascending: false })
    .limit(7);
  return records.data;
};

export const addRecord = async (
  timeToBed: string,
  wakeUpTime: string,
  sleepTime: number,
  numberOfAwaking: number,
  timeOfAwaking: number,
  morningFeeling: number,
  qualityOfSleep: number
) => {
  console.log(timeToBed);

  await supabase.from("INSOMNIA_RECORDS").insert({
    timeToBed: timeToBed,
    wakeUpTime: wakeUpTime,
    sleepTime: sleepTime,
    numberOfAwaking: numberOfAwaking,
    timeOfAwaking: timeOfAwaking,
    morningFeeling: morningFeeling,
    qualityOfSleep: qualityOfSleep,
  });
};

export const onClickDelete = async (id: number) => {
  await supabase.from("INSOMNIA_RECORDS").delete().eq("id", id);
};
