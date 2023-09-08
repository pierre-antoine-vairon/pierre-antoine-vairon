import styles from "./Summary.module.css";

export default function Summary() {
  return (
    <div className={styles.main}>
      <p className={styles.bienvenue}>Bienvenue</p>
      <h1 className={styles.h1}>Pierre-Antoine Vairon</h1>
      <h2 className={styles.h2}>Développeur web et mobile Full Stack.</h2>
      <div className={styles.paragraphsContainer}>
        <div className={styles.paragraphMargin}>
          <h3 className={styles.h3}>
            Pour les entrepreneurs et les particuliers :
          </h3>
          <p className={styles.text}>
            Que vous ayez besoin d'un site web personnalisé, d'une application
            mobile unique ou d'une assistance technique, je suis là pour vous
            aider en freelance. Transformons ensemble vos visions en projets
            concrets.
          </p>
        </div>
        <div className={styles.paragraphMargin}>
          <h3 className={styles.h3}>Pour les entreprises :</h3>
          <p className={styles.text}>
            Cherchez-vous un développeur dynamique pour renforcer votre équipe ?
            J'apporte mon expertise en développement, prêt à m'intégrer et à
            collaborer pour atteindre vos objectifs.
          </p>
        </div>
      </div>
    </div>
  );
}
