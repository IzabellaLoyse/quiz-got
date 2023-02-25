import { IButton } from "../../interfaces/button";
import styles from "./button.module.css";

function Button({
  message,
  isBigButton,
  routeButton,
  isLinkButton = false,
}: IButton) {
  return (
    <>
      {isLinkButton ? (
        <a
          href={routeButton}
          className={`${styles.button} ${
            isBigButton ? styles.bigButton : styles.smallButton
          }`}
        >
          {message}
        </a>
      ) : (
        <button
          type="button"
          className={`${styles.button} ${
            isBigButton ? styles.bigButton : styles.smallButton
          }`}
        >
          {message}
        </button>
      )}
    </>
  );
}

export default Button;
