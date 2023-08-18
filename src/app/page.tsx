export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-sky-200">
      <h1>INSOMNIA</h1>
      <form action="" method="POST">
        <div>
          <label htmlFor="time-for-bed">入床</label>
          <input type="time" id="time-for-bed" name="time-for-bed" required />
        </div>
        <div>
          <label htmlFor="wake-up-time">出床</label>
          <input type="time" id="wake-up-time" name="wake-up-time" required />
        </div>
        <div>
          <label htmlFor="sleep-time">寝付くのにかかった時間（分）</label>
          <input type="number" id="sleep-time" name="sleep-time" required />
        </div>
        <div>
          <label htmlFor="number-of-awaking">夜中に目覚めた回数</label>
          <input type="number" id="number-of-awaking" name="number-of-awaking" required />
        </div>
        <div>
          <label htmlFor="time-of-awaking">夜中に目覚めていた時間</label>
          <input type="number" id="time-of-awaking" name="time-of-awaking" required />
        </div>
        <div>
          <label htmlFor="morning-feeling">朝の気分</label>
          <input type="number" id="morning-feeling" name="morning-feeling" required />
        </div>
        <div>
          <label htmlFor="quality-of-sleep">睡眠の質</label>
          <input type="number" id="quality-of-sleep" name="quality-of-sleep" required />
        </div>
        <div>
          <button type="submit">登録</button>
        </div>
      </form>
    </main>
  );
}
