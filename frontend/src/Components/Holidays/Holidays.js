import './Holidays.css'
import React, { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import ViewHoliday from './ViewHoliday/ViewHoliday'
import AddHoliday from './AddHoliday/AddHoliday'

export const Holidays = () => {
    const [mode, setMode] = useState('view')

    useEffect(() => {
        // fetch()
    }, [])
    return (
        <div>
            <div className='HolidayContainer'>
                <div className='viewMode'>
                    <h4><Link to={'/holidays/viewHoliday'}>View Holidays</Link></h4>
                    <h4><Link to={'/holidays/addHoliday'}>Add Holidays</Link> </h4>
                    <h4><Link to={'/holidays/calculate'}>Calculation</Link> </h4>
                </div>
                <Outlet/>
            </div>
        </div>
    )
}
