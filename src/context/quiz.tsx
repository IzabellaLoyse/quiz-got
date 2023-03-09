import { createContext, useMemo, useReducer } from 'react';
import questions from '../data/questions';
import { STAGES } from '../enum/stages';
import { TYPESTATE } from '../enum/typeState';
import {
  Action,
  IQuizContext,
  IQuizState,
  IState,
} from '../interfaces/quizContext';

const initialState: IState = {
  gameStage: STAGES.START,
  questions,
  currentQuestion: 0,
  score: 0,
};

const reorderQuestions = (state: IState) => {
  return state.questions.sort(() => Math.random() - 0.5);
};

const QuizContext = createContext<IQuizState>({
  state: initialState,
  dispatch: () => {},
});

const quizReducer = (state: IState, action: Action) => {
  console.log(state, action);
  switch (action.type) {
    case TYPESTATE.CHANGE_STATE:
      return {
        ...state,
        gameStage: STAGES.PLAYING,
      };

    case TYPESTATE.REORDER_QUESTIONS:
      const questions = reorderQuestions(state);

      return {
        ...state,
        questions,
      };

    case TYPESTATE.CHANGE_QUESTION:
      const nextQuestion = state.currentQuestion + 1;

      return nextQuestion >= state.questions.length
        ? {
            ...state,
            gameStage: STAGES.END,
            currentQuestion: 0,
          }
        : {
            ...state,
            gameStage: state.gameStage,
            currentQuestion: nextQuestion,
          };

    case TYPESTATE.NEW_GAME:
      return initialState;

    default:
      return state;
  }
};

const QuizProvider = ({ children }: IQuizContext) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export default { QuizContext, QuizProvider };
