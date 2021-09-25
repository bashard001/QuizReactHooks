export const QuizReducer =(state, action) =>{
    switch (action.type) {
        case "START_QUIZ": return {
            ...state,
            start: true
        }
            
      case "END_QUIZ": return {
        ...state,
        end: true
    }
    
        default:
           return state
    }
}