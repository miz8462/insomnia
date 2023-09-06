"use client";
import Form from "./components/Form";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-28 bg-sky-200">
      <Header />
      <Form buttonText="登録" />
    </main>
  );
}
