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

const INITIAL_STATE ={
  i: 0,
  score: 0,
  timeLeft: 80
}

function App() {
const [state, dispatch ] = useCombinedReducers({
  start: useReducer(QuizReducer, false),
  progress: useReducer(ProgressReducer, INITIAL_STATE )
})

const {start , progress} = state
  return (
   <DispatchContext.Provider value={{dispatch,start, progress}}>
      <Header/>
      <ListQuestions/>
     </DispatchContext.Provider>
   
  );
}

export default App;
