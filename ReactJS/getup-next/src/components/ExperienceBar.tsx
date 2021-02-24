import {useContext} from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

// CSS
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar () {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);
    
    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div className={`${styles.stripes} ${styles.animated} ${styles.slower}`} style={{width: `${percentToNextLevel}%`}}/>
                <span className={styles.currentExperience} style={{left: `${percentToNextLevel}%`}}>
                    {currentExperience} xp
                    <span className={styles.cePercentage}>50%</span>
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}