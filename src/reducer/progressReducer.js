function addA(answer){
    return{
        answer: answer
    }
}

function init(){
    return{
        i: 0,
        score: 0,
        answers: []
      }
}

const ProgressReducer = (state, action) => {
    switch (action.type) {
        case "NEXT_Q": return {
            ...state, 
            i: state.i + 1
        }
        case "SCORE": return{
            ...state,
            score: state.score+1
        }
            
           case "TIME_LEFT": return {
               ...state,
               timeLeft: state.timeLeft--
           }
           case "ANSWER": return{
               ...state,
               answers: [...state.answers, addA(action.answer)]
           }
           case "RESET": return init()
    
        default:
            return state
    }
}

export default ProgressReducer