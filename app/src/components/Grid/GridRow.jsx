import React from 'react'
import "./Grid.css"

const GridRow = props => {

    const { children } = props

    return <div className="React--Grid.Row">{children}</div>
}


export default GridRow