import { supabase } from "./supabase";

export const getRecordById = async (id: number) => {
  const record = await supabase.from("INSOMNIA_RECORDS").select("*").eq("id", id);
  return record.data;
};

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

export const updateRecord = async (
  id: number,
  timeToBed: string,
  wakeUpTime: string,
  sleepTime: number,
  numberOfAwaking: number,
  timeOfAwaking: number,
  morningFeeling: number,
  qualityOfSleep: number
) => {
  await supabase
    .from("INSOMNIA_RECORDS")
    .update({
      timeToBed: timeToBed,
      wakeUpTime: wakeUpTime,
      sleepTime: sleepTime,
      numberOfAwaking: numberOfAwaking,
      timeOfAwaking: timeOfAwaking,
      morningFeeling: morningFeeling,
      qualityOfSleep: qualityOfSleep,
    })
    .eq("id", id);
};

export const deleteRecord = async (id: number) => {
  await supabase.from("INSOMNIA_RECORDS").delete().eq("id", id);
};
