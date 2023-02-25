import Button from "../../components/Button/Button";
import styles from "./home.module.css";
import imgGotWorld from "/img/got.png";

function Home() {
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
          routeButton="/quiz"
          isLinkButton={true}
        />
      </div>
    </main>
  );
}

export default Home;
