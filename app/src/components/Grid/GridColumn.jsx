import React from 'react'
import PropTypes from "prop-types"
import "./Grid.css"

const GridColumn = props => {

    const { children, col } = props

    return <div className={`React--Grid-Col React--Grid-Col-${col}`}>{children}</div>
}

GridColumn.propTypes = {
    col: PropTypes.number
};

GridColumn.defaultProps = {
    col: 1
};

export default GridColumn