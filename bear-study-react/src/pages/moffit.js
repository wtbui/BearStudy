import "../styles/library.css" 
import "../styles/settings.css" 
import { Link } from "react-router-dom"
import { useState } from "react"
import Timer from "../components/timer"
import { useEffect } from "react"
import Switch from "../components/switch"
import SettingsPage from "../components/settingsPage"
import taskList from "../components/tasklist"
import ambience from "../components/ambience"

export default function Moffit() {
    const [showTimer, setShowTimer] = useState(false)
    const [showAmbience, setShowAmbience] = useState(false)
    const [showTodo, setShowTodo] = useState(false)

    const [second, setSecond] = useState('00');
    const [minute, setMinute] = useState('2');
    const [pomoSecond, setPomoSecond] = useState('00');
    const [pomoMinute, setPomoMinute] = useState('25');
    const [breakSecond, setBreakSecond] = useState('00');
    const [breakMinute, setBreakMinute] = useState('5');
    const [breakCounter, setBreakCounter] = useState(299);
    const [pomoCounter, setPomoCounter] = useState(1499);
    const [isActive, setIsActive] = useState(false);
    const [counter, setCounter] = useState(1);
    const [maxCounter, setMaxCounter] = useState(counter)
    const [maxSecond, setMaxSecond] = useState(second)
    const [maxMinute, setMaxMinute] = useState(minute)
    const [settingsActive, setSettingsActive] = useState(false);

    const handleTimer = () => {
        setShowTimer((prev) => !prev)
    }

    const handleAmbience = () => {
        setShowAmbience((prev) => !prev)
    }

    const handleTodo = () => {
        setShowTodo((prev) => !prev)
    }

    const getButtonClass = (showButton) => {
        return showButton ? "tabButtonActive" : "tabButtonInactive" 
    }

    useEffect(() => {
        let intervalId;

        if (isActive && counter > -1) {
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

    const pomodoroMinutes = document.querySelector('.textEntryLeft');
    const pomodoroSeconds = document.querySelector('.textEntryRight');
    const breakMinutes = document.querySelector('.textEntryLeftBreak');
    const breakSeconds = document.querySelector('.textEntryRightBreak');

    const addEvents = () => {
        pomodoroMinutes.addEventListener('input', () => {
            if (pomodoroMinutes.value.length === pomodoroMinutes.maxLength) {
            pomodoroSeconds.focus();
            }
        });
    
        breakMinutes.addEventListener('input', () => {
            if (breakMinutes.value.length === breakMinutes.maxLength) {
            breakSeconds.focus();
            }
        });
    }

    return (
        <div className="library" 
        style={{
            backgroundImage: `url(${require('../assets/moffitt_DRAFT.png')})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}>
            <div className="header">
                <Link to="../../">Go Back</Link>
            </div>

            { settingsActive && 
            <div>
                <SettingsPage></SettingsPage>
                <div className="darken" onClick={() => setSettingsActive(false) }></div>
            </div>}

            <div className="tabs">
                <div className="todo" flex-direction="column" >
                    <button className={ getButtonClass(showTodo) } onClick={ handleTodo }>
                        { !showTodo && <text className="inactiveButtonText">to do</text> }
                        { showTodo && <text className="activeButtonText">to do</text> }
                    </button>
                    { showTodo && taskList()}
                </div>

                <div className="ambience" flex-direction="column" >
                    <button className={ getButtonClass(showAmbience) } onClick={ handleAmbience }>
                        { !showAmbience && <text className="inactiveButtonText">ambience</text> }
                        { showAmbience && <text className="activeButtonText">ambience</text> }
                    </button>
                    { showAmbience && ambience()}
                </div>

                <div className="timer" flex-direction="column" >
                    <button className={ getButtonClass(showTimer) } onClick={ handleTimer }>
                        { !showTimer && isActive && <div className="activeButtonText">
                            <span className="minute">{minute}:</span>
                            <span className="second">{second}</span></div> 
                        }

                        { !showTimer && !isActive && <text className="inactiveButtonText">timer</text> }
                        { showTimer && <text className="activeButtonText">timer</text> }
                    </button>

                    { showTimer && 
                    <Timer second={ second } setSecond={ setSecond }
                    minute={ minute } setMinute={ setMinute }
                    pomoMinute={ pomoMinute } setPomoMinute={ setPomoMinute }
                    breakMinute={ breakMinute } setBreakMinute={ setBreakMinute }
                    pomoSecond={ pomoSecond } setPomoSecond={ setPomoSecond }
                    breakSecond={ breakSecond } setBreakSecond={ setBreakSecond }
                    breakCounter={ breakCounter } setBreakCounter={ setBreakCounter }
                    pomoCounter={ pomoCounter } setPomoCounter={ setPomoCounter }
                    isActive={ isActive } setIsActive={ setIsActive }
                    counter={ counter } setCounter={ setCounter }
                    maxCounter={ maxCounter } setMaxCounter={ setMaxCounter } 
                    maxSecond={ maxSecond } setMaxSecond={ setMaxSecond } 
                    maxMinute={ maxMinute } setMaxMinute={ setMaxMinute }
                    settingsActive={ settingsActive } setSettingsActive={ setSettingsActive }></Timer>}
                </div>
            </div>
        </div>
    )
}