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

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={stopPropagation}>
        <div className={styles.modalHeader}>
          <span onClick={onClose}>&times;</span>
        </div>
        <div className={styles.modalContent}>
          <Carousel img={project.imageIllustration} />
          <h2>{project.title}</h2>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <p>{project.description.accueil}</p>
          <h3>Description Technique</h3>
          <p>{project.description.technique}</p>
          <h3>Description Fonctionnelle</h3>
          <p>{project.description.fonctionnelle}</p>
        </div>
      </div>
    </div>
  );
}
