import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./SocialLinks.module.css";

export default function SocialLinks() {
  return (
    <div className={styles.container}>
      <a
        href="https://github.com/pierre-antoine-vairon"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <FontAwesomeIcon icon={faGithub} className={styles.icon} /> Github
      </a>
      <a
        href="https://www.linkedin.com/in/pierre-antoine-vairon-436772262/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <FontAwesomeIcon icon={faLinkedin} className={styles.icon} /> Linkedin
      </a>
    </div>
  );
}
