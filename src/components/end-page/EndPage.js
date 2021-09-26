import React,{ useContext, useState } from 'react'
import DispatchContext from '../context/DispatchContext'

import "./end.styles.scss"

export default function EndPage() {
    const [initial, setInitial] = useState("")
    const { start } = useContext(DispatchContext)

    function handleSubmit (e){
        e.preventDefault()
        console.log(initial)
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
            
        </div>
    )
}
