import { useEffect } from 'react';
import Button from '../../components/Button/Button';
import { TYPESTATE } from '../../enum/typeState';
import useQuizContext from '../../hooks/useQuizContext';

function Quiz() {
  const { state, dispatch } = useQuizContext();

  const currentQuestionQuiz = state.questions[state.currentQuestion];

  useEffect(() => {
    dispatch({ type: TYPESTATE.REORDER_QUESTIONS });
  }, [dispatch]);

  return (
    <section>
      <div className="question">
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
