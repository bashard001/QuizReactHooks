import React, {
  useReducer,
} from 'react';
import './App.css';
import Header from './components/header/Header';
import DispatchContext from './components/context/DispatchContext';
import useCombinedReducers from 'use-combined-reducers';
import ListQuestions from './components/List-questions/ListQuestions';
import { QuizReducer } from './reducer/quizReducer';
import ProgressReducer from './reducer/progressReducer';
import QuestionsReducer from './reducer/questionsReducer';

const INITIAL_STATE ={
  i: 0,
  score: 0,
  timeLeft: 80
}
const Questions = 
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

function App() {
const [state, dispatch ] = useCombinedReducers({
  start: useReducer(QuizReducer, {start: false,
  end: false}),
  progress: useReducer(ProgressReducer, INITIAL_STATE ),
  questions: useReducer(QuestionsReducer, Questions)
})

const {start , progress, questions} = state
  return (
   <DispatchContext.Provider value={{dispatch,start, progress, questions}}>
     {!start.start ? null :  <Header />}
      <ListQuestions/>
     </DispatchContext.Provider>
   
  );
}

export default App;
