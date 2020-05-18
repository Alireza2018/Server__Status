import React from 'react'
import './style.css'

const Error = ({ message, problem, }) => {

    return (
        <div className="React--Error-Root">
            <div className="React--Error-FlexRow">
                <span>Problem:</span><span>{problem}</span>
            </div>
            <div className="React--Error-FlexRow">
                <span>Message:</span><span>{message}</span>
            </div>
        </div>
    )
}

export default Error

