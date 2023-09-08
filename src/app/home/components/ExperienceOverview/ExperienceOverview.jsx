// Component
import HomeButton from "../../../components/common/button/HomeButton";
// Style
import styles from "./ExperienceOverview.module.css";

export default function ExperienceOverview() {
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>
        DERNIÈRE <span className={styles.spanTitle}>EXPÉRIENCE</span>
      </h1>
      <div></div>
      <div>
        <HomeButton />
      </div>
    </section>
  );
}
