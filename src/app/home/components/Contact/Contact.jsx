// Components
import HomeButton from '../../../components/common/button/HomeButton';
// Style
import styles from './Contact.module.css';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>
        ME <span className={styles.spanTitle}>CONTACTER</span>
      </h1>
      <div className={styles.nameContainer}>
        <h2>Pierre-Antoine Vairon</h2>
        <h3>France</h3>
      </div>
      <div>
        <h4>Via Mail :</h4>
        <p>
          <FontAwesomeIcon icon={faEnvelope} />
          pavairon.dev@gmail.com
        </p>
      </div>
      <div>
        <h4>Via Whatsapp :</h4>
        <p>
          <FontAwesomeIcon icon={faWhatsapp} />
          0612345678
        </p>
      </div>
      <div>
        <h4>Via Réseaux :</h4>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/pierre-antoine-vairon-436772262/"
        >
          <FontAwesomeIcon icon={faLinkedin} /> Linkedin
        </a>
      </div>
      <div>
        <HomeButton text={`ENVOYER MAIL`} />
      </div>
    </section>
  );
}
