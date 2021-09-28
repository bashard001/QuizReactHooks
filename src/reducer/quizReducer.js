export const QuizReducer =(state, action) =>{
    switch (action.type) {
        case "START_QUIZ": return {
            ...state,
            start: true
        }
        case "RESET": return{
            start: false,
            end:false
        }
            
      case "END_QUIZ": return {
        ...state,
        end: true
    }
    
        default:
           return state
    }
}