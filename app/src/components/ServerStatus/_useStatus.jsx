import React, { useEffect, useState, useContext } from 'react'


export const StatusContext = React.createContext()
export const useStatus = () => useContext(StatusContext)
export const StatusProvider = ({ children }) => {

    const [loading, setLoading] = useState()
    const [error, setError] = useState()
    const [status, setStatus] = useState()

    useEffect(() => { })

    const handleGetStatus = () => {
        setLoading(true)
        if (error !== undefined) setError()
        if (status !== undefined) setStatus()
        cockpit.spawn(["statusdemo", "-c", "4", '127.0.0.1'])
            .stream(statusOutput)
            .then(getStatusSuccess)
            .catch(getStatusFail);
    }

    const getStatusSuccess = () => {
        setLoading(false)
    }

    const getStatusFail = exception => {
        setError(exception)
        setLoading(false)
    }

    const statusOutput = data => {
        const json = JSON.parse(data)
        setStatus(json)
    }


    return (
        <StatusContext.Provider
            value={{
                loading,
                error,
                status,
                handleGetStatus
            }}
        >
            {children}
        </StatusContext.Provider>
    )
}