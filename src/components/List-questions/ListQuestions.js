import React,{useContext, useEffect} from 'react'
import "./list.styles.scss"
import StartQuiz from '../start-quiz/StartQuiz'
import DispatchContext from '../context/DispatchContext';

const questions = 
[
  {
    title: "How far is the sun from earth?",
    choices: ["92.6 million mi", "96.92 million mi", "92 million mi", "95 million mi"],
    answer: "96.92 million mi"
  },
  {
    title: "How far is the moon from earth?",
    choices: ["238,900 mi", "283 mi", "300,100 mi", "340,000 mi"],
    answer: "238,900 mi"
  },
  {
    title: "what is the shape of the earth?",
    choices: ["flat.", "rectangle.", "spherical.", "non of the above."],
    answer: "spherical."
  },
  {
    title: "which statement is true? ",
    choices: ["The sun is orbiting the earth", "The moon is orbiting the sun", "The sun is orbiting mars", "The earth is orbiting the sun"],
    answer: "The earth is orbiting the sun"
  },
  {
    title: "How many planets does our solar system has?",
    choices: ["8", "12", "4", "1"],
    answer: "8"
  },

];

export default function ListQuestions() {
    const { start, progress } = useContext(DispatchContext) 
    useEffect(()=>{
        console.log(progress)
    })
    return (
        <div className="main-content">
            <StartQuiz />
        </div>
    )
}
