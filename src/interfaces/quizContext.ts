import { STAGES } from '../enum/stages';

export type Action = {
  type: string;
  payload?: { answer: string; option: string };
};

export interface IQuizContext {
  children: React.ReactNode;
}

export interface IState {
  gameStage: STAGES;
  questions: IQuestion[];
  currentQuestion: number;
  score: number;
  isAnswerSelected: boolean;
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
