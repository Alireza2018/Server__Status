import React from 'react'
import { GridContainer } from "../Grid";
import { useStatus } from './_useStatus'
import Header from './defaults/header'
import Error from './defaults/error'
import Status from './defaults/status'
import Loader from './defaults/loader'
import './defaults/style.css'

const Template = props => {
    const { loading, error, status } = useStatus()

    return (
        <>
            <Header />
            <div className="React--Template-Root">
                {loading && <Loader />}
                {error && <Error {...error} />}
                {status && <GridContainer><Status {...status} /></GridContainer>}
            </div>
        </>
    )
}

export default Template