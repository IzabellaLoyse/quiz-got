import { STAGES } from '../enum/stages';

export type Action = { type: string };

export interface IQuizContext {
  children: React.ReactNode;
}

export interface IState {
  gameStage: STAGES;
  questions: IQuestion[];
  currentQuestion: number;
  score: number;
}

export interface IQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface IQuizState {
  state: IState;
  dispatch: React.Dispatch<Action>;
}
