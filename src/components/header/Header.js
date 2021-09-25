import React, { useState, useEffect,useContext } from 'react'
import "./header.styles.scss"
import DispatchContext from '../context/DispatchContext'

export default function Header() {

    const { start, dispatch } = useContext(DispatchContext)

    let [timer, setTimer] = useState(5)

    let interval 


function timerFun() {
        if (timer === 0) {
            console.log(" is end")
            dispatch({type: "END_QUIZ"})
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

if(start.end){
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
