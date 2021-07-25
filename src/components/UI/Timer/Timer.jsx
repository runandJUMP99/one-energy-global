import React, {useEffect, useState} from "react";

import classes from "./Timer.module.css";

const Timer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timeStart, setTimeStart] = useState(false);
    const timeLeft = (new Date("8/27/2021") - new Date()) / 1000;

    useEffect(() => {
        if (!timeStart) {
            const currentDays = Math.floor(timeLeft / 86400);
            const currentHours = Math.floor((timeLeft - (currentDays * 86400)) / 3600); // 
            const currentMinutes = Math.floor((timeLeft - ((currentDays * 86400) + (currentHours * 3600))) / 60);
            const currentSeconds = Math.floor((timeLeft - ((currentDays * 86400) + (currentHours * 3600) + (currentMinutes * 60))) / 60);

            setDays(currentDays);
            setHours(currentHours);
            setMinutes(currentMinutes);
            setSeconds(currentSeconds);
            setTimeStart(true);
        }

        let timer;

        timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    if (hours > 0) {
                        setHours(hours - 1);
                        setMinutes(59);
                    } else {
                        if (days > 0) {
                            setDays(days - 1);
                            setHours(23);
                        } else {
                            clearInterval(timer);
                        }
                    }
                }
            } 
        }, 1000);
    
        return () => {
            clearInterval(timer);
        };
    }, [days, hours, minutes, seconds, timeLeft, timeStart, setDays, setHours, setMinutes, setSeconds, setTimeStart]);

    return (
        <div className={classes.Timer}>
            <h1 className={classes.Time}>{days} : {hours} : {minutes} : {seconds < 10 ? String(seconds).padStart(2, "0") : seconds}</h1>
        </div>
    );
}

export default Timer;