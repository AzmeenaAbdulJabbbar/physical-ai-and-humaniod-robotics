
// import type {ReactNode} from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import Heading from '@theme/Heading';

// import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={styles.heroSection}>
//       <div className="container">
//         <div className={styles.heroContent}>
//           <div className={styles.heroText}>
//             <div className={styles.tagline}>
//               <span className={styles.highlight}>Open Source</span>
//               <span className={styles.separator}>•</span>
//               <span className={styles.highlight}>Physical AI</span>
//               <span className={styles.separator}>•</span>
//               <span className={styles.highlight}>Comprehensive</span>
//             </div>
            
//             <Heading as="h1" className={styles.heroTitle}>
//               Physical AI & Humanoid Robotics
//             </Heading>
            
//             <p className={styles.heroSubtitle}>
//               The Definitive Curriculum: Bridging Theory and Practice in the Synthesis of Advanced Embodied Intelligence, Next-Generation Humanoid Systems, and Real-Time Autonomous Action.
//             </p>
            
//             <div className={styles.features}>
//               <div className={styles.feature}>
//                 <span className={styles.icon}>🤖</span>
//                 <span>From basics to advanced Physical AI</span>
//               </div>
//               <div className={styles.feature}>
//                 <span className={styles.icon}>🎯</span>
//                 <span>Build intelligent robotic systems</span>
//               </div>
//               <div className={styles.feature}>
//                 <span className={styles.icon}>🚀</span>
//                 <span>Cutting-edge research & applications</span>
//               </div>
//             </div>
            
//             <div className={styles.heroButtons}>
//               <Link
//                 className="button button--primary button--lg"
//                 to="/docs/part-1-foundations-of-embodied-intelligence/01-01-intro-physical-ai">
//                 Start Reading →
//               </Link>
//               <Link
//                 className="button button--secondary button--lg"
//                 to="https://github.com/AzmeenaAbdulJabbbar/">
//                 Github View
//               </Link>
//             </div>
//           </div>
          
//           <div className={styles.heroImage}>
//             <img 
//               src="/img/ai pic.webp" 
//               alt="Physical AI & Humanoid Robotics" 
//               className={styles.robotImg}
//             />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         {/* You can add other components here if needed, e.g., <HomepageFeatures /> */}
//       </main>
//     </Layout>
//   );
// }








import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroWrapper}>
          <div className={styles.floatingBadge}>
            <span className={styles.badgeDot}></span>
            <span>Open Source Curriculum</span>
          </div>
          
          <Heading as="h1" className={styles.heroTitle}>
            Physical AI &<br/>Humanoid Robotics
          </Heading>
          
          <p className={styles.heroDescription}>
            Master the future of robotics through hands-on learning. From foundational concepts to 
            advanced implementations—build, deploy, and innovate with cutting-edge Physical AI systems.
          </p>
          
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>12+</div>
              <div className={styles.statLabel}>Comprehensive Modules</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Practical Projects</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Free & Open Source</div>
            </div>
          </div>
          
          <div className={styles.ctaSection}>
            <Link className={styles.primaryCta} to="/docs/overview">
              Begin Your Journey
              <span className={styles.arrow}>→</span>
            </Link>
            <Link className={styles.secondaryCta} to="https://github.com/AzmeenaAbdulJabbbar/physical-ai-and-humaniod-robotics.git">
              <svg className={styles.githubIcon} viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              View on GitHub
            </Link>
          </div>
          
          <div className={styles.featuresRow}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🧠</div>
              <div className={styles.featureText}>
                <h3>AI-Powered Intelligence</h3>
                <p>Deep learning, computer vision & autonomous decision-making</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>⚡</div>
              <div className={styles.featureText}>
                <h3>Real-World Applications</h3>
                <p>Industry-ready skills for robotics and automation</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🔬</div>
              <div className={styles.featureText}>
                <h3>Research-Backed</h3>
                <p>Latest methodologies from leading robotics labs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* Additional sections can be added here */}
      </main>
    </Layout>
  );
}