// Data
import projects from './recents-projects.json';
// Components
import Card from '../../../components/common/Card/Card';
import HomeButton from '../../../components/common/button/HomeButton';
// Style
import styles from './RecentProjects.module.css';

export default function RecentProjects({ className }) {
  return (
    <section className={`${styles.section} ${className}`}>
      <h1 className={styles.h1}>
        PROJETS <span className={styles.spanTitle}>RÉCENTS</span>
      </h1>
      <div className={styles.cardsContainer}>
        {projects.slice(-3).map((project) => (
          <div key={project.index} className={styles.cardContainer}>
            <Card
              title={project.title}
              description={project.description.accueil}
              tags={project.tags}
              customClass={styles.cardAdptativeContainer}
            />
          </div>
        ))}
      </div>
      <HomeButton
        text={'VOIR TOUS MES PROJETS'}
        href="/projets"
        className={styles.link}
      />
    </section>
  );
}
