import React from 'react';
import Image from 'next/image';
import styles from './modal.module.css';

export default function Modal({ project, onClose }) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <span onClick={onClose}>&times;</span>
        </div>
        <div className={styles.modalContent}>
          <Image
            src={project.image}
            alt={project.title}
            width={200}
            height={200}
          />
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
