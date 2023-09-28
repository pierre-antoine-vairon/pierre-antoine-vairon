import React from 'react';
// Component
import HomeButton from '../../../components/common/button/HomeButton';
// Style
import styles from './ExperienceOverview.module.css';
// Data
import experiences from './experiences.json';

export default function ExperienceOverview() {
  // Prendre la dernière expérience du fichier JSON
  const latestExperience = experiences[0];

  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>
        DERNIÈRE <span className={styles.spanTitle}>EXPÉRIENCE</span>
      </h1>
      <div className={styles.lineContainer}>
        <div className={styles.greenDot}></div>
        <div className={styles.whiteLine}></div>
        <div className={styles.titlesContainer}>
          <p>{latestExperience.date}</p>
          <h2>{latestExperience.title}</h2>
          <h3>{latestExperience.company}</h3>
          <h4>{latestExperience.technologies.join(' - ')}</h4>
        </div>
        <div>
          <div className={styles.ulContainer}>
            <p>Front-end :</p>
            <ul className={styles.customList}>
              {latestExperience.frontend.map((task, index) => (
                <li key={index}>- {task}</li>
              ))}
            </ul>
          </div>

          <div className={styles.ulContainer}>
            <p>Back-end :</p>
            <ul className={styles.customList}>
              {latestExperience.backend.map((task, index) => (
                <li key={index}>- {task}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <HomeButton className={styles.button} text={'VOIR MON CV'} />
    </section>
  );
}
