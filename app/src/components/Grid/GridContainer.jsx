import React from "react"
import "./Grid.css"

const GridContainer = props => {

    const { children } = props

    return <div className="React--Grid-Container">{children}</div>
}

export default GridContainer