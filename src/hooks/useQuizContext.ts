import { useContext } from 'react';
import QuizContext from '../context/quiz';

const useQuizContext = () => {
  const { state, dispatch } = useContext(QuizContext.QuizContext);
  return { state, dispatch };
};

export default useQuizContext;
