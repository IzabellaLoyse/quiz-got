import { IButton } from '../../interfaces/button';
import styles from './button.module.css';

function Button({ message, isBigButton, onClick }: IButton) {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={`${styles.button} ${
          isBigButton ? styles.bigButton : styles.smallButton
        }`}
      >
        {message}
      </button>
    </>
  );
}

export default Button;
