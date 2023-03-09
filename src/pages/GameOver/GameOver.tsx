import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { TYPESTATE } from '../../enum/typeState';
import useQuizContext from '../../hooks/useQuizContext';
import styles from './gameOver.module.css';
import imgWallOfIce from '/img/wall-of-ice.png';

function GameOver() {
  const { state, dispatch } = useQuizContext();
  const navigate = useNavigate();

  const handleRestartQuiz = () => {
    dispatch({ type: TYPESTATE.NEW_GAME });

    navigate('/');
  };

  return (
    <section className={styles.gameOverContainer}>
      <div className={styles.gameOverDescription}>
        <h2>Fim de Jogo</h2>
        <p>
          Pontuação: <strong>{state.score}</strong>{' '}
        </p>
        <p>
          Você acertou <strong>{state.score}</strong> de{' '}
          <strong>{state.questions.length}</strong> perguntas
        </p>
        <img
          src={imgWallOfIce}
          alt="Muralha de Gelo sendo derretida por um dragão"
        />
        <Button
          message="Reiniciar Quiz"
          isBigButton={true}
          onClick={handleRestartQuiz}
        />
      </div>
    </section>
  );
}

export default GameOver;
