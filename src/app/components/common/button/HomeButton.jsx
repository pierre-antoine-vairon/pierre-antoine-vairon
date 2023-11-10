// Style
import styles from './HomeButton.module.css';
// Tools
import Link from 'next/link';

export default function HomeButton({ text, href, className, email }) {
  // Si le bouton est pour envoyer un email
  if (email) {
    return (
      <a href={`mailto:${email}`} className={`${styles.button} ${className}`}>
        {text}
      </a>
    );
  }

  // Si c'est un bouton de navigation
  if (href) {
    return (
      <Link href={href} className={`${styles.button} ${className}`}>
        {text}
      </Link>
    );
  }

  // Si c'est juste un bouton sans action de navigation ou d'email
  return <button className={`${styles.button} ${className}`}>{text}</button>;
}
