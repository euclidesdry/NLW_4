import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';
// Profile CSS
import styles from '../styles/components/Profile.module.css';

export function Profile () {
    const { level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/euclidesdry.png" alt="Euclides do Rosário"/>
            <div>
                <strong>Euclides do Rosário</strong>
                <p>
                    <img src="icons/level.svg" alt="Nível"/>
                    Nível {level}
                </p>
            </div>
        </div>
    )
}