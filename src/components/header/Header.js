import React, { useState, useEffect, useContext, useRef } from 'react'
import "./header.styles.scss"
import DispatchContext from '../context/DispatchContext'


export default function Header() {

    const { start, dispatch } = useContext(DispatchContext)

    let [timer, setTimer] = useState(80)

    let interval = useRef()
    let timerRef = useRef(80)
    let dispatchRef = useRef(dispatch)
   

    useEffect(() => {
        console.log(dispatchRef.current)
        console.log("effect")
        interval.current = setInterval(() => {
            if (timerRef.current === 0) {
                console.log(" is end")
                dispatchRef.current({ type: "END_QUIZ" })
                clearInterval(interval.current)
    
            } else {
                timerRef.current = timerRef.current -1
                setTimer(prevTimer => prevTimer - 1)
            }
        }, 1000)
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
