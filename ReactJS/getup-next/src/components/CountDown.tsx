import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CountDown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function CountDown() {
    const { startNewChallenge } = useContext(ChallengesContext)

    const countTime = 0.1 * 60;

    const [time, setTime] = useState(countTime);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minutesRight] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    function startCountDown() {
        setIsActive(true);
    }

    function resetCountDown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);

        setTime(countTime);
    }

    useEffect(()=>{
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]);

    return (
        <div>
            <div className={`${styles.countdownContainer} ${isActive ? styles.countdownContainerActive : ''}`}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minutesRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

            {
                hasFinished ? (
                    <button 
                        disabled
                        className={styles.countDownButton}
                    >
                        Ciclo Terminado <span>&#10004;</span>
                    </button>
                ) : (
                    <>
                        { isActive ? (
                            <button 
                                type="button"
                                className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                                onClick={resetCountDown}
                            >
                                Terminar o Ciclo
                            </button>
                        ) : (
                            <button
                                type="button"
                                className={styles.countDownButton}
                                onClick={startCountDown}
                            >
                                Iniciar um Ciclo
                            </button>
                        )}
                    </>
                )
            }

        </div>
    );
}