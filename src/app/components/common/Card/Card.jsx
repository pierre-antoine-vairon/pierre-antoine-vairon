// Style
import styles from "./Card.module.css";

export default function Card({ title, description, tags }) {
  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.tagContainer}>
        {tags.map((tag) => (
          <span className={styles.tag} key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
