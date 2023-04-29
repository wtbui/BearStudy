import Switch from "./switch";

export default function SettingsPage(props) {


    return(
        <div className="timerSettings">
            <div className="title">
                <text>customize timers</text>
            </div >
            <div className="timerEntries">
                <div className="timeEntry">
                    <text>pomodoro</text>
                    <div style={{ display: "flex" }}>
                        <input className="textEntryLeft" maxlength={2}></input>
                        <p className="colonLeft">:</p>
                        <input className="textEntryRight" maxlength={2}></input>
                    </div>
                    <text className="timerEntryLabels">minute second</text>
                </div>

                <div className="timeEntry">
                    <text>break</text>
                    <div style={{ display: "flex" }}>
                        <input className="textEntryLeftBreak" maxlength={2}></input>
                        <p className="colonRight">:</p>
                        <input className="textEntryRightBreak" maxlength={2}></input>
                    </div>
                    <text className="timerEntryLabels">minute second</text>
                </div>
            </div >
            <div className="select">
                <Switch></Switch>
                <text className="switchLabel">play sound when timer finishes</text>
            </div >
            <div className="volume">
                <text className="volumeLabel">volume</text>
                <text>slider</text>
            </div>
            <div className="botButtons">
                <text>close</text>
                <text>save</text>
            </div>
        </div>
    );
};
