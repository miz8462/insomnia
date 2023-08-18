"use client";
import Form from "./components/Form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-sky-200">
      <h1>INSOMNIA</h1>
      <Form />
    </main>
  );
}
