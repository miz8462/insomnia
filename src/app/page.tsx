"use client";
import Stat from "./components/DailyStat";
import Form from "./components/Form";
import Header from "./components/Header";
import RecordTable from "./components/RecordTable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-28 bg-sky-200">
      <Header />
      <div className="flex">
        <Form />
        <div>
          <RecordTable />
          <Stat />
        </div>
      </div>
    </main>
  );
}
