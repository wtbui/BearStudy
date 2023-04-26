import React from 'react';
import '../styles/timer.css';
import { useState } from "react"
import { useEffect } from "react"


export default function Timer() {
    const [second, setSecond] = useState('00');
    const [minute, setMinute] = useState('2');
    const [isActive, setIsActive] = useState(false);
    const [counter, setCounter] = useState(119);
    const [maxCounter] = useState(counter)
    const [maxSecond] = useState(second)
    const [maxMinute] = useState(minute)


    function stopTimer() {
        setIsActive(false);
        setCounter(maxCounter);
        setMinute(maxMinute);
        setSecond(maxSecond)
    }
    
    useEffect(() => {
        let intervalId;

        if (isActive) {
            intervalId = setInterval(() => {
                const secondCounter = counter % 60;
                const minuteCounter = Math.floor(counter / 60);

                const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
                const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;

                setSecond(computedSecond);
                setMinute(computedMinute);

                setCounter(counter => counter - 1);
            }, 1000)
        }

        return () => clearInterval(intervalId);
    }, [isActive, counter])

    return (
        <div className="container">
            <div className="time">
                <span className="minute">{minute}</span>
                <span>:</span>
                <span className="second">{second}</span>
            </div>
            <div className="buttons">
                <button onClick={() => setIsActive(!isActive)} className="start">
                    {isActive ? "pause": "start"}
                </button>
                <button onClick={stopTimer} className="reset">reset</button>
            </div>
        </div>
    )
}
