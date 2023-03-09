import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import OptionsQuiz from '../../components/OptionsQuiz/OptionsQuiz';
import { TYPESTATE } from '../../enum/typeState';
import useQuizContext from '../../hooks/useQuizContext';
import styles from './quiz.module.css';

function Quiz() {
  const { state, dispatch } = useQuizContext();
  const navigate = useNavigate();

  const currentQuestionQuiz = state.questions[state.currentQuestion];

  const handleChangeQuestion = () => {
    dispatch({ type: TYPESTATE.CHANGE_QUESTION });

    if (state.currentQuestion + 1 >= state.questions.length)
      navigate('/game-over');
  };

  useEffect(() => {
    dispatch({ type: TYPESTATE.REORDER_QUESTIONS });
  }, [dispatch]);

  return (
    <section className={styles.wrapper}>
      <h1>Quiz Game of Thrones</h1>

      <div className={styles.questionContainer}>
        <p className={styles.questions}>
          Pergunta {state.currentQuestion + 1} de {state.questions.length}
        </p>
        <h2>{currentQuestionQuiz?.question}</h2>
        <div className="optionsContainer">
          {currentQuestionQuiz.options.map((option) => (
            <OptionsQuiz key={option} option={option} />
          ))}
        </div>

        <Button message="Continuar" onClick={handleChangeQuestion} />
      </div>
    </section>
  );
}

export default Quiz;
