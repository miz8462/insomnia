"use client";

import RecordTable from "../components/RecordTable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-28 bg-sky-200">
      <RecordTable />
    </main>
  );
}
