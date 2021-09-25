import React, { useState, useEffect, useRef } from 'react'
import "./header.styles.scss"

export default function Header() {

    let [timer, setTimer] = useState(10)

    let interval 


function timerFun() {
        if (timer === 0) {
            clearInterval(interval)
        } else {
           timer--
            setTimer(prevTimer => prevTimer - 1)
        }

    }
    

    useEffect(() => {
        
        interval = setInterval(timerFun, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])


    return (
        <div className="header">
            <div id="timer">
                {timer}
            </div>
            <div id="timeleft"></div>
        </div>
    )
}
