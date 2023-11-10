import styles from './Nav.module.css';

export default function Nav({ activeTab, setActiveTab }) {
  return (
    <nav className={styles.navMenu}>
      <button
        className={activeTab === 'projects' ? styles.active : null}
        onClick={() => setActiveTab('projects')}
      >
        PROJET
      </button>
      <button
        className={activeTab === 'experience' ? styles.active : null}
        onClick={() => setActiveTab('experience')}
      >
        EXPÉRIENCE
      </button>
      <button
        className={activeTab === 'contact' ? styles.active : null}
        onClick={() => setActiveTab('contact')}
      >
        CONTACT
      </button>
      <div className={styles.dot}></div>
    </nav>
  );
}
