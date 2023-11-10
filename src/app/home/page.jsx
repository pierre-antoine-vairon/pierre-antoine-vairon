'use client';

import { useState } from 'react';
// Style
import styles from './page.module.css';
//Components
import Summary from './components/Summary/Summary';
import Nav from '../components/common/Nav/Nav';
import SocialLinks from '../components/common/SocialLinks/SocialLinks';
import RecentProjects from './components/RecentProjects/RecentProjects';
import ExperienceOverview from './components/ExperienceOverview/ExperienceOverview';
import Contact from './components/Contact/Contact';

export default function Home() {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <main className={styles.main} data-active-tab={activeTab}>
      <section className={styles.section1}>
        <Summary />
        <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
        <SocialLinks />
      </section>
      <section className={styles.section2}>
        <RecentProjects className={styles['recent-projects']} />
        <ExperienceOverview className={styles['experience-overview']} />
        <Contact className={styles['contact']} />
      </section>
    </main>
  );
}

/* 
{activeTab === 'projects' && <RecentProjects />}
{activeTab === 'experience' && <ExperienceOverview />}
{activeTab === 'contact' && <Contact />}
*/
