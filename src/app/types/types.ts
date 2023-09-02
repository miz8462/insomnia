import { Dispatch, SetStateAction } from "react";

export type UseStateNumberProps = {
  stateName: number;
  setState: Dispatch<SetStateAction<number>>;
};

export type UseStateStringProps = {
  stateName: string;
  setState: Dispatch<SetStateAction<string>>;
};

export type LabelAndInputStringProps = {
  type: string;
  id: string;
  name: string;
  title: string;
  htmlFor: string;
  stateName: string;
  setState: Dispatch<SetStateAction<string>>;
};

export type LabelAndInputNumberProps = {
  type: string;
  id: string;
  name: string;
  title: string;
  htmlFor: string;
  stateName: number;
  setState: Dispatch<SetStateAction<number>>;
  min?: number;
  max?: number;
};

export type LabelProps = {
  htmlFor: string;
  title: string;
};

export type InputStringProps = {
  type: string;
  id: string;
  name: string;
  stateName: string;
  setState: Dispatch<SetStateAction<string>>;
};

export type InputNumberProps = {
  type: string;
  id: string;
  name: string;
  stateName: number;
  setState: Dispatch<SetStateAction<number>>;
  min?: number;
  max?: number;
};

export type Record = {
  id: number;
  createdAt: string;
  timeToBed: string;
  wakeUpTime: string;
  sleepTime: number;
  numberOfAwaking: number;
  timeOfAwaking: number;
  morningFeeling: number;
  qualityOfSleep: number;
};

export type Stat = {
  totalTimeInBed: number;
  totalSleepTime: number;
  sleepRatio: number;
};
