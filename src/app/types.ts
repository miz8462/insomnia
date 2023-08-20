import { Dispatch, SetStateAction } from "react";

export type InputNumberProps = {
  stateName: number;
  setState: Dispatch<SetStateAction<number>>;
};

export type InputStringProps = {
  stateName: string;
  setState: Dispatch<SetStateAction<string>>;
};