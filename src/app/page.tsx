"use client";
import { useState } from "react";

export default function Home() {
  const [timeForBed, setTimeForBed] = useState<string>("00:00");
  const [wakeUpTime, setWakeUpTime] = useState<string>("07:00");
  const [sleepTime, setSleepTime] = useState<number>(0);
  const [numberOfAwaking, setNumberOfAwaking] = useState<number>(0);
  const [timeOfAwaking, setTimeOfAwaking] = useState<number>(0);
  const [morningFeeling, setMorningFeeling] = useState<number>(0);
  const [qualityOfSleep, setQualityOfSleep] = useState<number>(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(timeForBed);
    // console.log(wakeUpTime);
    console.log(typeof(sleepTime));
    console.log(sleepTime);
    // console.log(numberOfAwaking);
    // console.log(timeOfAwaking);
    // console.log(morningFeeling);
    // console.log(qualityOfSleep);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-sky-200">
      <h1>INSOMNIA</h1>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="time-for-bed">入床</label>
          <input
            onChange={(e) => setTimeForBed(e.target.value)}
            value={timeForBed}
            type="time"
            id="time-for-bed"
            name="time-for-bed"
            required
          />
        </div>
        <div>
          <label htmlFor="wake-up-time">出床</label>
          <input
            onChange={(e) => setWakeUpTime(e.target.value)}
            value={wakeUpTime}
            type="time"
            id="wake-up-time"
            name="wake-up-time"
            required
          />
        </div>
        <div>
          <label htmlFor="sleep-time">寝付くのにかかった時間（分）</label>
          <input
            onChange={(e) => setSleepTime(Number(e.target.value))}
            value={sleepTime}
            type="number"
            id="sleep-time"
            name="sleep-time"
            required
          />
        </div>
        <div>
          <label htmlFor="number-of-awaking">夜中に目覚めた回数</label>
          <input
            onChange={(e) => setNumberOfAwaking(Number(e.target.value))}
            value={numberOfAwaking}
            type="number"
            id="number-of-awaking"
            name="number-of-awaking"
            required
          />
        </div>
        <div>
          <label htmlFor="time-of-awaking">夜中に目覚めていた時間</label>
          <input
            onChange={(e) => setTimeOfAwaking(Number(e.target.value))}
            value={timeOfAwaking}
            type="number"
            id="time-of-awaking"
            name="time-of-awaking"
            required
          />
        </div>
        <div>
          <label htmlFor="morning-feeling">朝の気分</label>
          <input
            onChange={(e) => setMorningFeeling(Number(e.target.value))}
            value={morningFeeling}
            type="number"
            id="morning-feeling"
            name="morning-feeling"
            required
          />
        </div>
        <div>
          <label htmlFor="quality-of-sleep">睡眠の質</label>
          <input
            onChange={(e) => setQualityOfSleep(Number(e.target.value))}
            value={qualityOfSleep}
            type="number"
            id="quality-of-sleep"
            name="quality-of-sleep"
            required
          />
        </div>
        <div>
          <button type="submit">登録</button>
        </div>
      </form>
    </main>
  );
}
