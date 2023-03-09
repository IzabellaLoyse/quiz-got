import useQuizContext from '../../hooks/useQuizContext';
import { IOptions } from '../../interfaces/options';
import styles from './options.module.css';

function OptionsQuiz({ option }: IOptions) {
  const { state, dispatch } = useQuizContext();

  return (
    <div className={styles.option}>
      <p>{option}</p>
    </div>
  );
}

export default OptionsQuiz;
