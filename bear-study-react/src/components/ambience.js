import React from 'react';
import '../styles/ambience.css'

function Ambience(props) {
    return(
        <div className='ambience-wrapper'>
            <div className='wrapper'>
                <span>
                    <p className='volumeTitle'>{props.volumeTitle}</p>
                    <audio loop ref={props.audio1Ref}>
                        <source src={require('../assets/talking.mp3')}/>   
                        This browser does not support HTML5 audio 
                    </audio>
                    <img src={require("../assets/white-sound-image.png")} onClick={props.handlePlay}></img>
                </span> 
                <input type="range" min="0" max="1" step="0.1" value = {props.volume} onChange={props.handleVolume}/>
            </div>
            <div className='wrapper'>
                <span>
                    <p className='volumeTitle'>{props.volume2Title}</p>
                    <audio loop ref={props.audio2Ref}>
                        <source src={require('../assets/Pen Writing .mp3')}/>  
                        This browser does not support HTML5 audio 
                    </audio>
                    <img src={require("../assets/white-sound-image.png")} onClick={props.handle2Play}></img>
                </span>
                <input type="range" min="0" max="1" step="0.1" value = {props.volume2} onChange={props.handleVolume2}/>
            </div>
            <div className='wrapper'>
                <span>
                    <p className='volumeTitle'>{props.volume3Title}</p>
                    <audio loop ref={props.audio3Ref}>
                        <source src={require('../assets/Typing Keyboard.mp3')}/>  
                        This browser does not support HTML5 audio 
                    </audio>
                    <img src={require("../assets/white-sound-image.png")} onClick={props.handle3Play}></img>
                </span>
                <input type="range" min="0" max="1" step="0.1" value = {props.volume3} onChange={props.handleVolume3}/>
            </div>
            <div className='wrapper'>
                <span>
                    <p className='volumeTitle'>{props.volume4Title}</p>
                    <audio loop ref={props.audio4Ref}>
                        <source src={require('../assets/Rain On Roof.mp3')}/>  
                        This browser does not support HTML5 audio 
                    </audio>
                    <img src={require("../assets/white-sound-image.png")} onClick={props.handle4Play}></img>
                </span>
                <input type="range" min="0" max="1" step="0.1" value = {props.volume4} onChange={props.handleVolume4}/>
            </div>
        </div>
    )
}

export default Ambience;