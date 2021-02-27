import Head from 'next/head';
import {GetServerSideProps} from 'next'

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
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level:number; 
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
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
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // chamada a API
  const {level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level : Number(level), 
      currentExperience : Number(currentExperience), 
      challengesCompleted : Number(challengesCompleted)
    }
  }
}