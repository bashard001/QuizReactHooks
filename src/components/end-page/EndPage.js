import React, { useContext, useState } from 'react'
import DispatchContext from '../context/DispatchContext'

import "./end.styles.scss"

export default function EndPage() {
    const [initial, setInitial] = useState("")
    const [showRes, setShowRes] = useState(false)
    const { start, progress } = useContext(DispatchContext)
    const highestScore = localStorage.getItem("initials")
    const pastScore = localStorage.getItem("score")

    function handleSubmit(e) {
        e.preventDefault()
        console.log(initial)
        if (!pastScore) {
            localStorage.setItem("initials", `${initial.toUpperCase()} : ${progress.score}`)
            localStorage.setItem("score", progress.score)
        } else if (pastScore && pastScore < progress.score) {
            localStorage.setItem("initials", `${initial.toUpperCase()} : ${progress.score}`)
            localStorage.setItem("score", progress.score)
        }

        setShowRes(true)
    }

    if (!start.end) {
        return null
    }

    return (
        <div>
            <div>You have successfully finished the Quiz</div>

            {showRes ?
                <fieldset>
                    <legend>Scores</legend>
                    <h4>Highest Score: <br /> {highestScore}</h4>

                    <h3>Your Score : {progress.score} out of 5</h3>
                    <hr />
                    {progress.answers.map((answer, index) => <div key={index}>Q {index + 1} : {answer.answer} Answer</div>)}
                </fieldset>
                :
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter your initials" maxLength="2" onChange={(e) => setInitial(e.target.value)} required />
                    <button type="submit">Click to get your score</button>
                </form>}
        </div>
    )
}
