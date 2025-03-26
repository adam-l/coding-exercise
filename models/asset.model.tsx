import { IQuestion } from "./question.model";

export interface IAsset {
  id: string;
  name: string;
  description: string;
  time?: string;
  tags?: string[];
  questions?: IQuestion[];
}