import React, { useState, useEffect, useContext, useRef } from 'react'
import "./header.styles.scss"
import DispatchContext from '../context/DispatchContext'




export default function Header() {

    const { start, dispatch } = useContext(DispatchContext)

    let [timer, setTimer] = useState(10)

    let interval = useRef()

    const timerFun = () => {
        if (timer === 0) {
            console.log(" is end")
            dispatch({ type: "END_QUIZ" })
            clearInterval(interval.current)

        } else {
            timer--
            setTimer(prevTimer => prevTimer - 1)
        }
    }

    useEffect(() => {
        interval.current = setInterval(timerFun, 1000)
        return () => clearInterval(interval.current)

    }, [])

    
    if (start.end) {
        return null
    }


    return (
        <div className="header">
            <div >The Quiz has Started</div>
            <div id="timer">
                you have {timer} seconds remaining
            </div>

        </div>
    )
}
