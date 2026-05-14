import React from 'react';
import styles from './css/Homepage.module.css';
import myphoto from './images/myphoto.jpg';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/akilpath',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.87 1 4.98 2.12 4.98 3.5ZM0.24 24H4.76V7.98H0.24V24ZM7.5 7.98H12V9.78H12.08C12.87 8.62 14.67 7.3 17.13 7.3C22.12 7.3 23 10.81 23 15.35V24H18.5V16.4C18.5 14.53 18.45 11.99 15.85 11.99C13.21 11.99 12.72 13.94 12.72 16.19V24H8.23V7.98H7.5Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/akilpath',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5C0 17.8 3.44 22.2 8.21 23.8C8.82 23.9 9.02 23.5 9.02 23.2C9.02 22.9 9 22.1 9 21.2C5.66 21.9 4.97 19.7 4.97 19.7C4.43 18.2 3.63 17.8 3.63 17.8C2.55 17.1 3.72 17.1 3.72 17.1C4.93 17.2 5.56 18.4 5.56 18.4C6.64 20.2 8.34 19.7 9.02 19.4C9.12 18.6 9.42 18.1 9.76 17.8C7.1 17.5 4.31 16.5 4.31 11.7C4.31 10.3 4.76 9.2 5.5 8.3C5.4 8 5.04 6.8 5.6 5.2C5.6 5.2 6.63 4.9 9 6.5C9.96 6.3 10.98 6.2 12 6.2C13.02 6.2 14.04 6.3 15 6.5C17.37 4.9 18.4 5.2 18.4 5.2C18.96 6.8 18.6 8 18.5 8.3C19.24 9.2 19.69 10.3 19.69 11.7C19.69 16.5 16.9 17.5 14.24 17.8C14.72 18.3 15.1 19.2 15.1 20.5C15.1 22.3 15.08 23.8 15.08 23.9C15.08 24.2 15.28 24.6 15.9 23.8C20.67 22.2 24.1 17.8 24.1 12.5C24.1 5.87 18.73 0.5 12.1 0.5H12Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=yFl0RqQAAAAJ&hl=en',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3 2 8l10 5 10-5-10-5z" fill="currentColor" />
        <path d="M6 9.5v8.5l6 3 6-3V9.5l-6 3-6-3z" fill="currentColor" />
        <path d="M8.5 14.5h7v1h-7zM8.5 17.5h7v1h-7z" fill="currentColor" />
      </svg>
    ),
  },
];

function Homepage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>AI Enthusiast</p>
          <h1 className={styles.title}>Akil Pathiranage</h1>
          <p className={styles.description}>
            Hi my name is Akil. I'm studying mechatronics at UW with a focus on AI. I'm passionate about ml with experience across NLP, computer vision, and robotics. I enjoy exploring how learning systems can solve real-world problems.
          </p>
          <div className={styles.links}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconButton}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <img className={styles.photo} src={myphoto} alt="Akil Pathiranage" />
      </header>

      {/* <section className={styles.section}>
        <div className={styles.card}>
          <h2>About</h2>
          <p>
            I am a mechatronics engineer and researcher specializing in applied machine learning and embedded perception. I develop robust algorithms for autonomous agents that sense complex environments and act with confidence.
          </p>
        </div>
      </section> */}

      <section className={styles.gridSection}>
        <div className={styles.card}>
          <h2>Research areas</h2>
          <ul className={styles.list}>
            <li>Reinforcement Learning and OPD for LLMs</li>
            <li>Neural Rendering and World Models</li>
            <li>Diffusion Models</li>
            <li>Robotics</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h2>Experience</h2>
          <div className={styles.bubbleGrid}>
            <div className={styles.bubble}>
              <strong>Cerebras</strong>
              <p>Reasoning, RL and OPD for LLMs.</p>
            </div>
            <div className={styles.bubble}>
              <strong>Waabi</strong>
              <p>Sensor simulation for autonomous vehicles.</p>
            </div>
            <div className={styles.bubble}>
              <strong>University of Waterloo</strong>
              <p>4D Reconstruction and computer vision for food.</p>
            </div>
            <div className={styles.bubble}>
              <strong>Fermilab</strong>
              <p>Quantum networking across cities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.card}>
          <h2>Selected Articles</h2>
          <ol className={styles.publications}>
            <li>
              <a href="https://www.cerebras.ai/blog/cepo-update-turbocharging-reasoning-models-capability-using-test-time-planning" target="_blank" rel="noopener noreferrer">
                CePO Update: Turbocharging Reasoning Models’ capability using test-time planning
              </a>
              <span>• Cerebras blog post</span>
            </li>
            <li>
              <a href="https://arxiv.org/pdf/2405.07121" target="_blank" rel="noopener noreferrer">
                In The Wild Ellipse Parameter Estimation for Circular Dining Plates and Bowls
              </a>
              <span>• CVPR 2024 MetaFood Workshop</span>
            </li>
            <li>
              <a href="https://arxiv.org/abs/2510.06536" target="_blank" rel="noopener noreferrer">
                Optimal filtering and generation of entangled photons for quantum applications in the presence of noise
              </a>
              <span>• Accepted to Physical Review Applied</span>
            </li>
          </ol>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Feel free to reach out to me on LinkedIn!</p>
      </footer>
    </main>
  );
}

export default Homepage;
