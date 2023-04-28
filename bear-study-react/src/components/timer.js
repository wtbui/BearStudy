import React from 'react';
import '../styles/timer.css';
import { useState } from "react"
import { useEffect } from "react"
import reset from "../assets/reset.png"
import settings from "../assets/settings.png"

export default function Timer(props) {
    function resetTimer() {
        props.setIsActive(false);
        props.setCounter(props.maxCounter);
        props.setMinute(props.maxMinute);
        props.setSecond(props.maxSecond)
    }

    function pomoTimer() {
        props.setIsActive(false);
        props.setCounter(props.pomoCounter);
        props.setMinute(props.pomoMinute);
        props.setSecond(props.pomoSecond);
        props.setMaxMinute(props.pomoMinute);
        props.setMaxSecond(props.pomoSecond);
        props.setMaxCounter(props.pomoCounter)
    }

    function breakTimer() {
        props.setIsActive(false);
        props.setCounter(props.breakCounter);
        props.setMinute(props.breakMinute);
        props.setSecond(props.breakSecond);
        props.setMaxMinute(props.breakMinute);
        props.setMaxSecond(props.breakSecond);
        props.setMaxCounter(props.breakCounter)
    }

    return (
        <div className="container">
            <div className="time">
                <span className="minute">{props.minute}:</span>
                <span className="second">{props.second}</span>
            </div>

            <div className="middleTimerButtons">
                <button onClick={pomoTimer} className="mediumButton">
                    pomodoro
                </button>

                <button onClick={breakTimer} className="mediumButton">
                    break
                </button>
            </div>

            <div className="buttons">
                <button onClick={resetTimer} className="reset"> 
                    <img className="timerIcons" src={reset} alt="reset"/>
                </button>

                <button onClick={() => props.setIsActive(prev => !prev)} className="start">
                    {props.isActive ? "pause": "start"}
                </button>

                <button onClick={() => props.setSettingsActive(prev => !prev)} className="settings"> 
                    <img className="timerIcons" src={settings} alt="settings"/>
                </button>
            </div>
        </div>
    )
}
