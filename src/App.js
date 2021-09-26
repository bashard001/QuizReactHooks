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
import Questions from './assets/questions';

const INITIAL_STATE = {
  i: 0,
  score: 0,
  timeLeft: 80
}


function App() {
  const [state, dispatch] = useCombinedReducers({
    start: useReducer(QuizReducer, {
      start: false,
      end: false
    }),
    progress: useReducer(ProgressReducer, INITIAL_STATE),
    questions: useReducer(QuestionsReducer, Questions)
  })

  const { start, progress, questions } = state
  return (
    <DispatchContext.Provider value={{ dispatch, start, progress, questions }}>
      {!start.start ? null : <Header />}
      <ListQuestions />
    </DispatchContext.Provider>

  );
}

export default App;
