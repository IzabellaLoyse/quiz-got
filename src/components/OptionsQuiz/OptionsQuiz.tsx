import useQuizContext from '../../hooks/useQuizContext';
import { IOptions } from '../../interfaces/options';
import styles from './options.module.css';

function OptionsQuiz({ option, answer, onSelectOption }: IOptions) {
  const { state } = useQuizContext();

  const isCorrect = option === answer;

  const isWrong = !isCorrect && state.isAnswerSelected;

  const optionClass = `${styles.option} ${
    isCorrect ? styles.optionCorrect : ''
  } ${isWrong ? styles.optionWrong : ''}`;

  return (
    <div
      className={optionClass}
      onClick={() => onSelectOption?.()}
      tabIndex={0}
    >
      <p>{option}</p>
    </div>
  );
}

export default OptionsQuiz;
