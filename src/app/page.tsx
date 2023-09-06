"use client";
import Link from "next/link";
import Form from "./components/Form";
import Header from "./components/Header";
import Button from "./components/atom/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-28 bg-sky-200">
      <Header />
      <Form buttonText="登録" />
      <Link href="/table" className="p-4">
        <Button>週間データを表示</Button>
      </Link>
    </main>
  );
}
