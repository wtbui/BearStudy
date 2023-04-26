import "../styles/library.css" 
import { Link } from "react-router-dom"
import { useState } from "react"
import Timer from "../components/timer"
import background from "../assets/moffit.jpeg"

export default function Moffit() {
    const [showTimer, setShowTimer] = useState(false)
    const [showAmbience, setShowAmbience] = useState(false)
    const [showTodo, setShowTodo] = useState(false)


    const handleTimer = () => {
        setShowTimer((prev) => !prev)
    }

    const handleAmbience = () => {
        setShowAmbience((prev) => !prev)
    }

    const handleTodo = () => {
        setShowTodo((prev) => !prev)
    }

    return (
        <div className="main" 
        style={{
            backgroundImage: `url(${require('../assets/moffit.jpeg')})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}>
            <div className="header">
                moffit!
                <Link to="../../">Go Back</Link>
            </div>

            <div className="tabs">
                <div className="todo" flex-direction="column" >
                    { showTimer && <p>Example Todo</p>}
                    <button className="tabButton" onClick={ handleTimer }>to do</button>
                </div>

                <div className="ambience" flex-direction="column" >
                    { showAmbience && <p>Example Ambience</p>}
                    <button className="tabButton" onClick={ handleAmbience }>ambience</button>
                </div>

                <div className="timer" flex-direction="column" >
                    { showTodo && <Timer></Timer>}
                    <button className="tabButton" onClick={ handleTodo }>
                        <text className="buttonText">timer</text>
                    </button>
                </div>
            </div>
        </div>
    )
}