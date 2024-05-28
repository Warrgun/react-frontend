import React, {useState, useEffect, useRef} from "react";
import "./stop-watch.css";

const StopWatch = () => {
    const [timer, setTimer] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0)

    useEffect(() =>{
        if(timer){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now()-startTimeRef.current)
            }, 10);
        }
        return() => clearInterval(intervalIdRef.current)
    },[timer]);

    const start = () => {
        setTimer(true) 
        startTimeRef.current = Date.now() - elapsedTime;
    }
    const stop = () => setTimer(false);
    const reset = () =>{
        setTimer(false)
        setElapsedTime(0)
    }

    const formatTimer = () =>{
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / 1000 % 60);
        let miliseconds = Math.floor((elapsedTime % 1000)/10);

        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        miliseconds = String(miliseconds).padStart(2,"0");

        return `${minutes}:${seconds}:${miliseconds}`
    }
    
    return(
        <div className="stop-watch">
            <div className="display">
                <span>{formatTimer()}</span>
            </div>
            <div className="button-container">
                <button className="start-button" onClick={start}>START</button>
                <button className="stop-button" onClick={stop}>STOP</button>
                <button className="reset-button" onClick={reset}>RESET</button>
            </div>
        </div>
        );
}

export default StopWatch