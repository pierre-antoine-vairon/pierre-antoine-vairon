import HomeButton from "../../../components/common/button/HomeButton";
// Style
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>
        ME <span className={styles.spanTitle}>CONTACTER</span>
      </h1>
      <div></div>
      <div>
        <HomeButton />
      </div>
    </section>
  );
}
