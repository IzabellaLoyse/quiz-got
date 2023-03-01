import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { TYPESTATE } from '../../enum/typeState';
import useQuizContext from '../../hooks/useQuizContext';
import styles from './home.module.css';
import imgGotWorld from '/img/got.png';

function Home() {
  const { dispatch } = useQuizContext();

  const navigate = useNavigate();

  const handleStartQuiz = () => {
    dispatch({ type: TYPESTATE.CHANGE_STATE });

    navigate('/quiz');
  };

  return (
    <main>
      <div className={styles.wrapperContainer}>
        <h1 className={styles.title}>Valar Morghulis</h1>

        <p className={styles.description}>
          Este é um quiz para testar os seus conhecimentos sobre o universo de
          Game Of Thrones
        </p>

        <img src={imgGotWorld} alt="Imagem do mundo de Game of Thrones" />

        <p className={styles.description}>Esta pronto para este desafio ?</p>

        <Button
          message="Iniciar Quiz"
          isBigButton={true}
          onClick={handleStartQuiz}
        />
      </div>
    </main>
  );
}

export default Home;
