import styles from './Card.module.css';
import Image from 'next/image';

export default function Card({
  image,
  title,
  description,
  tags,
  onClick,
  customClass,
}) {
  return (
    <div
      className={`${styles.cardContainer} ${customClass} `}
      onClick={onClick}
    >
      {image && (
        <div className={styles.imageContainer}>
          <Image src={image} alt={title} width={200} height={200} />
        </div>
      )}
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description.accueil}</p>
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
