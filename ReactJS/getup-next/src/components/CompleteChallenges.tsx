import {useContext} from 'react';

//Contexts
import { ChallengesContext } from '../contexts/ChallengesContext';

//CSS
import styles from '../styles/components/CompleteChallenges.module.css';

export function CompleteChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}