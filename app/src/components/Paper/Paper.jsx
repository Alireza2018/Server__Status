import React from 'react'
import './Paper.css'


const Paper = ({ children, ...props }) => {

    return <div className="React--Paper">{children}</div>
}


export default Paper