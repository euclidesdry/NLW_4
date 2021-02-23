import styles from '../styles/pages/Home.module.css';

//Components
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompleteChallenges } from '../components/CompleteChallenges';
import { CountDown } from '../components/CountDown';

// modules

import Head from 'next/head'

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

        </div>
      </section>
    </div>
  )
}