import React from 'react'
import "./list.styles.scss"
import StartQuiz from '../start-quiz/StartQuiz'
import QuestionCard from '../question-cards/QuestionCard';
import EndPage from '../end-page/EndPage';


export default function ListQuestions() {


    
    return (
        <div className="main-content">
            <StartQuiz />
            <QuestionCard />
            <EndPage />
        </div>
    )
}
