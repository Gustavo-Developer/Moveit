import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { ChallengeBox } from '../components/ChallengeBox';
import { Profile } from '../components/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';
import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';
import { GetServerSideProps } from 'next';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
      level: number;
      currentExperience: number;
      challengeCompleted:number;
}

export default function Home(props) {
  return (

  <ChallengesProvider 
  level ={props.level}
  currentExperience={props.currentExperience}
  challengeCompleted={props.challengesCompleted}
  >
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      
      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  </ChallengesProvider>    
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


  const { level, currentExperience, challengeCompleted} = ctx.req.cookies;


  return {
    props: {
      level:Number(level),
      currentExperience:Number(currentExperience),
      challengeCompleted:Number(challengeCompleted) 
    }
  }
}

