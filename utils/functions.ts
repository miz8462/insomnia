export const strTimeToNum = (strTime: string): number => {
  const hour = strTime.slice(0, 2);
  const minutes = strTime.slice(3, 5);
  const totalMinutes = Number(hour) * 60 + Number(minutes);
  return totalMinutes;
};

export const numToStrTime = (numMinutes: number) => {
  const hour = Math.floor(numMinutes / 60);
  const minutes = numMinutes % 60;
  const strHour = hour < 10 ? "0" + String(hour) : String(hour);
  const strMinutes = minutes < 10 ? "0" + String(minutes) : String(minutes);
  return strHour + ":" + strMinutes;
};