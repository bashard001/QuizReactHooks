

const ProgressReducer = (state, action) => {
    switch (action.type) {
        case "NEXT_Q": return {
            ...state, 
            i: state.i++
        }
        case "SCORE": return{
            ...state,
            score: action.payload
        }
            
           case "TIME_LEFT": return {
               ...state,
               timeLeft: state.timeLeft--
           }
    
        default:
            return state
    }
}

export default ProgressReducer