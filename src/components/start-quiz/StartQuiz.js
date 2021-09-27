import React, { useContext } from 'react'
import "./start.styles.scss"
import DispatchContext from '../context/DispatchContext'

export default function StartQuiz() {

    const { start, dispatch } = useContext(DispatchContext)
    const handleClick = () => {
        dispatch({ type: "START_QUIZ" })
    }

    if (start.start) {
        return null
    }

    return (
        <div className="start-quiz">
            <h1>Astronomy Quiz</h1>
            <h2>This is the Astronomy Quiz you been waiting to take all your life!! are you prepared Click the button to get started!!!</h2>
            <button className='buttons' onClick={handleClick}>Take the quiz</button>

        </div>
    )
}
