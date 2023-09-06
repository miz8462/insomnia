"use client";

import Link from "next/link";
import RecordTable from "../components/RecordTable";
import Button from "../components/atom/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-28 bg-sky-200">
      <RecordTable />
      <Link href="/" className="m-4">
        <Button>戻る</Button>
      </Link>
    </main>
  );
}
