// Style
import styles from './HomeButton.module.css';

export default function HomeButton({ text, className }) {
  return <button className={`${styles.button} ${className}`}>{text}</button>;
}
