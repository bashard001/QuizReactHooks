import React,{ useContext } from 'react'
import DispatchContext from '../context/DispatchContext'

import "./end.styles.scss"

export default function EndPage() {

    const { start } = useContext(DispatchContext)

    if(!start.end){
        return null
    }

    return (
        <div>
            <div>You have successfully finished the Quiz</div>
            <form>
                <input type="text" placeholder="Enter your initials" maxLength="2" required/>
                <button>Click to get your score</button>
            </form>
            
        </div>
    )
}
