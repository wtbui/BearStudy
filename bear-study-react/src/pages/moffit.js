import "../styles/library.css" 
import "../styles/settings.css" 
import { Link } from "react-router-dom"
import { useState } from "react"
import Timer from "../components/timer"
import { useEffect } from "react"
import Switch from "../components/switch"
import SettingsPage from "../components/settingsPage"
import taskList from "../components/tasklist"
import spotifyIco from "../assets/spotify_icon.png"
import Spotify from "../components/spotify"
import { useRef } from "react"
import Ambience from "../components/ambience"
import backButton from "../assets/bearstudy_map_icon.png"
import Clock from "../components/clock"
import audio1 from "../assets/talking.mp3"
import audio2 from "../assets/2 Minute White Noise.mp3"
import audio3 from "../assets/Typing Keyboard.mp3"
import audio4 from "../assets/rain.mp3"

export default function Moffit() {
    const [showTimer, setShowTimer] = useState(false)
    const [showAmbience, setShowAmbience] = useState(false)
    const [showTodo, setShowTodo] = useState(false)
    const [showSpotify, setShowSpotify] = useState(false)

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
    const [volume, setVolume] = useState(0.4); 
    const [volume2, setVolume2] = useState(0.1);
    const [volume3, setVolume3] = useState(0.3);
    const [volume4, setVolume4] = useState(0.3);
    const audio1Ref = useRef(null);
    const audio2Ref = useRef(null);
    const audio3Ref = useRef(null);
    const audio4Ref = useRef(null);
    const [audio1Play, setAudio1Play] = useState(true); 
    const [audio2Play, setAudio2Play] = useState(true); 
    const [audio3Play, setAudio3Play] = useState(true); 
    const [audio4Play, setAudio4Play] = useState(true); 
    const [currTaskList, setTaskList] = useState([]);

    function handlePlay() {
        if (audio1Play) {
            audio1Ref.current.play();
            audio1Ref.current.volume = 0.5;
            setAudio1Play(!audio1Play);
        } else {
            audio1Ref.current.pause();
            setAudio1Play(!audio1Play);
        }
    }

    function handle2Play() {
        if (audio2Play) {
            audio2Ref.current.play();
            setAudio2Play(!audio2Play);
        } else {
            audio2Ref.current.pause();
            setAudio2Play(!audio2Play);
        }
    }

    function handle3Play() {
        if (audio3Play) {
            audio3Ref.current.play();
            setAudio3Play(!audio3Play);
        } else {
            audio3Ref.current.pause();
            setAudio3Play(!audio3Play);
        }
    }

    function handle4Play() {
        if (audio4Play) {
            audio4Ref.current.play();
            setAudio4Play(!audio4Play);
        } else {
            audio4Ref.current.pause();
            setAudio4Play(!audio4Play);
        }
    }

    const handleVolume= (event) => {
        const volume = event.target.value;
        setVolume(volume)
        audio1Ref.current.volume = volume;
    }

    const handleVolume2 = (event) => {
        const volume = event.target.value;
        setVolume2(volume)
        audio2Ref.current.volume = volume;
    }

    const handleVolume3 = (event) => {
        const volume = event.target.value;
        setVolume3(volume)
        audio3Ref.current.volume = volume;
    }
 
    const handleVolume4 = (event) => {
        const volume = event.target.value;
        setVolume4(volume)
        audio4Ref.current.volume = volume;
    }

    const handleTimer = () => {
        setShowTimer((prev) => !prev)
    }

    const handleAmbience = () => {
        setShowAmbience((prev) => !prev)
    }

    const handleTodo = () => {
        setShowTodo((prev) => !prev)
    }

    const handleSpotify = () => {
        setShowSpotify((prev) => !prev)
    }

    const getButtonClass = (showButton) => {
        return showButton ? "tabButtonActive" : "tabButtonInactive" 
    }

    const getButtonClassSpotify = (showButton) => {
        return showButton ? "spotifyButtonActive" : "spotifyButtonInactive" 
    }

    const getTabClassSpotify = (showButton) => {
        return showButton ? "spotifyTabActive" : "spotifyTabInactive" 
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
                <div className="backButtonDiv">
                    <img className="backIcon" src={ backButton } alt="back"/>
                    <Link className="backButtonLink" to="../../"></Link>
                    <text className="backText">back</text>
                </div>

                <div className="clockDiv">
                    <Clock></Clock>
                </div>

                <div className= { getTabClassSpotify(showSpotify) }>
                    <button className={ getButtonClassSpotify(showSpotify) } onClick={ handleSpotify }>
                        <img className="spotifyIcon" src={spotifyIco} alt="spotify"/>
                    </button>
                    <Spotify uri="spotify:playlist:6xZTCV7Xs5TMsgRLDEuojY" size="large" 
                    theme="black" view="list"></Spotify>
                </div>
            </div>

            { settingsActive && 
            <div>
                <SettingsPage
                    settingsActive={ settingsActive } 
                    setSettingsActive={ setSettingsActive }
                    setPomoMinute={ setPomoMinute }
                    setPomoSecond={ setPomoSecond }
                    setBreakMinute={ setBreakMinute }
                    setBreakSecond={ setBreakSecond }
                ></SettingsPage>
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
                    {showAmbience && <Ambience volume={volume} handleVolume={handleVolume} volumeTitle="other students"
                    audio1Ref={audio1Ref} handlePlay={handlePlay} 
                    volume2={volume2} handleVolume2={handleVolume2} volume2Title="books and papers"
                    volume3={volume3} handleVolume3={handleVolume3} volume3Title="typing"
                    volume4={volume4} handleVolume4={handleVolume4} volume4Title="rainy day"
                    audio2Ref={audio2Ref} audio3Ref={audio3Ref} audio4Ref={audio4Ref}
                    handle2Play={handle2Play} handle3Play={handle3Play} handle4Play={handle4Play}
                    audio1={audio1} audio2={audio2} audio3={audio3} audio4={audio4}
                    />}
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