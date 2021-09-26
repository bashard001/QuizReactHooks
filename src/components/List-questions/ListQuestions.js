import React, { useContext, useEffect } from 'react'
import "./list.styles.scss"
import StartQuiz from '../start-quiz/StartQuiz'
import QuestionCard from '../question-cards/QuestionCard';
import DispatchContext from '../context/DispatchContext';
import EndPage from '../end-page/EndPage';



export default function ListQuestions() {
    const { progress } = useContext(DispatchContext)
    useEffect(() => {
        console.log(progress)
    })
    return (
        <div className="main-content">
            <StartQuiz />
            <QuestionCard />
            <EndPage />
        </div>
    )
}
