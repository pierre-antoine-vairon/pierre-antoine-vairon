'use client';
//tools
import React, { useState } from 'react';
import Link from 'next/link';
//components
import Modal from './components/modal/modal';
import ProjectCard from './components/projectCard/projectCard';
//data
import projectsData from '../../data/projects.json';
//style
import styles from './page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function ProjetsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Liste des Projets</h1>
        <Link href="../home" className={styles.iconContainer}>
          <FontAwesomeIcon icon={faHome} className={styles.icon} />
        </Link>
      </header>
      <div className={styles.projectsContainer}>
        {projectsData.projets.map((project) => {
          return (
            <ProjectCard
              key={project.index}
              image={project.imageAccueil}
              title={project.titre}
              description={project.description}
              tags={project.tags}
              onClick={() => openModal(project)}
              customClass={styles.cardBorder}
            />
          );
        })}
      </div>

      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
}
