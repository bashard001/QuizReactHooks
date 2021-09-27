import React,{ useContext, useState } from 'react'
import DispatchContext from '../context/DispatchContext'

import "./end.styles.scss"

export default function EndPage() {
    const [initial, setInitial] = useState("")
    const { start, progress } = useContext(DispatchContext)

    function handleSubmit (e){
        e.preventDefault()
        console.log(initial)
        
       
        localStorage.setItem("initials", `${initial} : ${progress.score}` )
        localStorage.setItem("score", progress.score)
    }

    if(!start.end){
        return null
    }

    return (
        <div>
            <div>You have successfully finished the Quiz</div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your initials" maxLength="2" onChange={(e) => setInitial(e.target.value)} required/>
                <button type="submit">Click to get your score</button>
            </form>
            <fieldset>
                <legend>Scores</legend>
                <h4>Highest Score: <br/> BD ; 2</h4>
                <h3>Your Score : </h3>
                <hr/>
            </fieldset>
            
        </div>
    )
}
