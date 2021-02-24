import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar () {
    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div className={`${styles.stripes} ${styles.animated} ${styles.slower}`} style={{width: '50%'}}/>
                <span className={styles.currentExperience} style={{left: '50%'}}>
                    300 xp
                    <span className={styles.cePercentage}>50%</span>
                </span>
            </div>
            <span>600 xp</span>
        </header>
    );
}