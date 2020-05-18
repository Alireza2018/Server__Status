import React from 'react'
import { useStatus } from '../_useStatus'
import './style.css'


const Header = props => {

    const { loading, handleGetStatus } = useStatus()
    if (loading) return <div className="React--Header-Root">Loading Server Status...</div>
    return (
        <div className="React--Header-Root">
            {!loading && (
                <div className="btn-group">
                    <button className="btn btn-default" onClick={handleGetStatus}>
                        <span>Load Status</span>
                    </button>
                </div>
            )}
        </div>
    )
}

export default Header 