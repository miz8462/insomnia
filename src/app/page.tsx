"use client";
import { useEffect, useState } from "react";
import { getAllRecords } from "../../utils/supabaseFunctions";
import RecordList from "./RecordList";
import Form from "./components/Form";
import Header from "./components/Header";
import { Record } from "./types/types";

export default function Home() {
  // Todo: any型を直す
  const [records, setRecords] = useState<any>([]);
  useEffect(() => {
    const getRecords = async () => {
      const records = await getAllRecords();
      setRecords(records);
      console.log(records);
    };
    getRecords();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-28 bg-sky-200">
      <Header />
      <div className="flex">
        <Form />
        <RecordList records={records} />
      </div>
    </main>
  );
}
