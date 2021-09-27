import React, { useContext } from 'react'
import "./question-card.scss"
import DispatchContext from '../context/DispatchContext'

export default function QuestionCard() {

    const { start, questions, progress, dispatch } = useContext(DispatchContext)
    var i = progress.i
    console.log(questions)

    const handleClick = (e) => {
        if (i < questions.length - 1) {
            console.log(i + " " + questions.length)
            dispatch({ type: "NEXT_Q" })
            if (e.target.getAttribute("answer") === "right") {
                dispatch({ type: "ANSWER", answer: "Right"})
                dispatch({ type: "SCORE" })
            } else {
                dispatch({ type: "ANSWER", answer: "Wrong"})
            }
        } else {
            
            dispatch({ type: "END_QUIZ" })
        }
    }

    if (!start.start || start.end) {
        return null
    }

    return (
        <div>
            <h1>{questions[i].title}</h1>
            {questions[i].choices.map((choice, index) =>
                <h3 key={index} onClick={handleClick} answer={questions[i].answer === choice ? "right" : "wrong"}
                    className="choice-btn">{choice}</h3>
            )}
        </div>
    )
}
