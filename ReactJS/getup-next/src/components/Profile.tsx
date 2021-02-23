import styles from '../styles/components/Profile.module.css';

export function Profile () {
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/euclidesdry.png" alt="Euclides do Rosário"/>
            <div>
                <strong>Euclides do Rosário</strong>
                <p>
                    <img src="icons/level.svg" alt="Nível"/>
                    Nível 1
                </p>
            </div>
        </div>
    )
}