import Head from 'next/head';

// Css
import styles from '../styles/pages/Home.module.css';

//Components
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompleteChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';
// Contexts
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
  return (
    <div className={styles.Container}>
      <Head>
        <title>Inicio - GetUp!</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompleteChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}