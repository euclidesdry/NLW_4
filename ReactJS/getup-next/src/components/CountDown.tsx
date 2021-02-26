import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CountDown.module.css';
import { CountdownContext } from './../contexts/CountdownContext';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const { 
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } =  useContext(CountdownContext);

    const [minuteLeft, minutesRight] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

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
                                onClick={resetCountdown}
                            >
                                Terminar o Ciclo
                            </button>
                        ) : (
                            <button
                                type="button"
                                className={styles.countDownButton}
                                onClick={startCountdown}
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