import styles from './projectCard.module.css';
import Image from 'next/image';

export default function ProjectCard({
  image,
  title,
  description,
  tags,
  onClick,
}) {
  return (
    <div className={styles.cardContainer} onClick={onClick}>
      <div className={styles.imageContainer}>
        <Image src={image} alt={title} width={250} height={150} />
      </div>
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
