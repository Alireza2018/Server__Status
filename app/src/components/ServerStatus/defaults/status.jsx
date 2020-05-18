import React from 'react'
import { GridColumn } from '../../Grid'
import Paper from '../../Paper'
import './style.css'


const Status = ({ psu1, psu2, mgmt1, mgmt2, data1, data2, ...props }) => {

    return (
        <>
            <GridColumn col={4}>
                <Paper>
                    <strong>Primary Power Supply</strong>
                    {
                        psu1 && (
                            (psu1.status !== 'ok') ?
                                <div className="React--status-Info"><div className="React--Status-Indicator React--Status-Indicator-Danger" />&nbsp;&nbsp;Power supply AC lost</div>
                                :
                                <div className="React--status-Info"><div className="React--Status-Indicator React--Status-Indicator-Ok" />&nbsp;&nbsp;{psu1.status}</div>
                        )
                    }
                </Paper>
            </GridColumn>
            <GridColumn col={4}>
                <Paper>
                    <strong>Secondary Power Supply</strong>
                    {
                        psu2 && (
                            (psu2.status !== 'ok') ?
                                <div className="React--status-Info"><div className="React--Status-Indicator React--Status-Indicator-Danger" />&nbsp;&nbsp;Power supply AC lost</div>
                                :
                                <div className="React--status-Info"><div className="React--Status-Indicator React--Status-Indicator-Ok" />&nbsp;&nbsp;{psu2.status}</div>

                        )
                    }
                </Paper>
            </GridColumn>
            <GridColumn col={4}>
                <Paper>
                    <strong>Management port</strong>
                    {
                        mgmt1 && (
                            (mgmt1.bps === 0) ?
                                <div className="React--status-Info"><div className="React--Status-Indicator React--Status-Indicator-PowerOff" />&nbsp;&nbsp;MGMT 1&nbsp;&nbsp;{mgmt1.link_status}</div>
                                :
                                <div className="React--status-Info"><div className="React--Status-Indicator React--Status-Indicator-Ok" />&nbsp;&nbsp;MGMT 1&nbsp;&nbsp;{mgmt1.link_status}</div>
                        )
                    }
                </Paper>
            </GridColumn>
            <GridColumn col={4}>
                <Paper>
                    <strong>Management port</strong>
                    {
                        mgmt2 && (
                            (mgmt2.bps === 0) ?
                                <div className="React--status-Info"><div className="React--Status-Indicator React--Status-Indicator-PowerOff" />&nbsp;&nbsp;MGMT 2&nbsp;&nbsp;{mgmt2.link_status}</div>
                                :
                                <div className="React--status-Info"><div className="React--Status-Indicator React--Status-Indicator-Ok" />&nbsp;&nbsp;MGMT 2&nbsp;&nbsp;{mgmt2.link_status}</div>

                        )
                    }
                </Paper>
            </GridColumn>
            <GridColumn col={4}>
                <Paper>
                    <strong>Data port</strong>
                    {
                        data1 && (
                            (data1.bps === 0) ?
                                <div className="React--status-Info"><div className="React--Status-Indicator React--Status-Indicator-PowerOff" />&nbsp;&nbsp;Secondary&nbsp;&nbsp;{data1.link_status}</div>
                                :
                                <div className="React--status-Info"><div className="React--Status-Indicator React--Status-Indicator-Ok" />&nbsp;&nbsp;Secondary&nbsp;&nbsp;{data1.link_status}</div>

                        )
                    }
                </Paper>
            </GridColumn>
            <GridColumn col={4}>
                <Paper>
                    <strong>Data port</strong>
                    {
                        data2 && (
                            (data2.bps === 0) ?
                                <div className="React--status-Info"><div className="React--Status-Indicator React--Status-Indicator-PowerOff" />&nbsp;&nbsp;p6p1&nbsp;&nbsp;{data2.link_status}</div>
                                :
                                <div className="React--status-Info"><div className="React--Status-Indicator React--Status-Indicator-Ok" />&nbsp;&nbsp;p6p1&nbsp;&nbsp;{data2.link_status}</div>
                        )
                    }
                </Paper>
            </GridColumn>
        </>
    )
}

export default Status