// Style
import styles from "./HomeButton.module.css";

export default function HomeButton({ text }) {
  return <button className={styles.button}>{text}</button>;
}
