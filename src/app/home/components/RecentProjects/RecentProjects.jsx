// Data
import projects from './recents-projects.json';
// Components
import Card from '../../../components/common/Card/Card';
import HomeButton from '../../../components/common/button/HomeButton';
// Style
import styles from './RecentProjects.module.css';

export default function RecentProjects() {
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>
        PROJETS <span className={styles.spanTitle}>RÉCENTS</span>
      </h1>
      <div className={styles.cardContainer}>
        {projects.slice(-3).map((project) => (
          <Card
            key={project.index}
            title={project.title}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>
      <HomeButton className={styles.button} text={'VOIR TOUS MES PROJETS'} />
    </section>
  );
}
