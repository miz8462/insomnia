import { supabase } from "./supabase";

export const getAllRecords = async () => {
  const records = await supabase.from("INSOMNIA_RECORDS").select("*");
  return records.data;
};
