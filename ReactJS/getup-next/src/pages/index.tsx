import Head from 'next/head';

// Css
import styles from '../styles/pages/Home.module.css';

//Components
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompleteChallenges } from '../components/CompleteChallenges';
import { CountDown } from '../components/CountDown';
import { ChallengeBox } from '../components/ChallengeBox';

export default function Home() {
  return (
    <div className={styles.Container}>
      <Head>
        <title>Inicio - GetUp!</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompleteChallenges />
          <CountDown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}