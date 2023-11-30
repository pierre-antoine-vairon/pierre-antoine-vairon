// Tools
import React from 'react';
import Image from 'next/image';
// CSS
import styles from './modal.module.css';
// Components
import Carousel from '@/app/components/common/Carousel/Carousel';

export default function Modal({ project, onClose }) {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  console.log(project.github);
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={stopPropagation}>
        <div className={styles.modalHeader}>
          <span onClick={onClose}>&times;</span>
        </div>
        <div className={styles.modalContent}>
          <Carousel img={project.imageIllustration} />
          <span className={styles.githubLink}>
            Liens vers le code source: <a href={project.github}>GitHub</a>
          </span>
          <div className={styles.display}>
            <h1>Nom du projet: </h1>
            <p>{project.titre}</p>
          </div>
          <div className={styles.display}>
            <h2>Technologies:</h2>
            <p className={styles.tags}>{project.tags.join(', ')}</p>
          </div>

          <div className={styles.display}>
            <h3>Description: </h3>
            <p>{project.description}</p>
          </div>
          <div>
            <h3>Fonctionnalités:</h3>
            <ul>
              {project.fonctionnalités.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Étapes du développement:</h3>
            <ul>
              {project.étapes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
