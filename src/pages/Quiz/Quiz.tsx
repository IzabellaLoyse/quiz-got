import { useEffect } from 'react';
import Button from '../../components/Button/Button';
import { TYPESTATE } from '../../enum/typeState';
import useQuizContext from '../../hooks/useQuizContext';
import styles from './quiz.module.css';

function Quiz() {
  const { state, dispatch } = useQuizContext();

  const currentQuestionQuiz = state.questions[state.currentQuestion];

  useEffect(() => {
    dispatch({ type: TYPESTATE.REORDER_QUESTIONS });
  }, [dispatch]);

  return (
    <section className={styles.wrapper}>
      <h1>Quiz Game of Thrones</h1>

      <div className={styles.questionContainer}>
        <p>
          Pergunta {state.currentQuestion + 1} de {state.questions.length}
        </p>
        <h2>{currentQuestionQuiz.question}</h2>
        <div className="optionsContainer">
          <p>Opções</p>
        </div>

        <Button
          message="Continuar"
          onClick={() => dispatch({ type: TYPESTATE.CHANGE_QUESTION })}
        />
      </div>
    </section>
  );
}

export default Quiz;
