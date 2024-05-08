import './TemplateHoliday.css'
import UpdateHoliday from '../UpdateHoliday/UpdateHoliday'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TemplateHoliday = ({ hData }) => {
    const [visible, setVisible] = useState(false)
    // console.log(props);
    const {_id, name ,duration, destination, location, amenities, level } = hData
    const handleView = (e) => {
        setVisible(e)
    }
    const navigate = useNavigate()
    const handleDelete = () => {
        const op = localStorage.getItem('email').split(',')
    
        if (op.length!=0) {
            fetch("http://localhost:5000/api/auth/deleteHoliday", {
                method: 'DELETE',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                     _id, admin_id: op[0], admin_password:op[1]
                })
            }).then((x) => {
                return x.json()

            }).then((x) => {
                if(x?.success){
                    navigate('/')
                }
                console.log(x)
            }).catch((x) => {
                console.log(`error occured${x}`);
            })
        }

    }
    return (
        <div className='cardContainer'>
            <div className='element'>{name}</div>
            <div className='element'>{duration}</div>
            <div className='element'>{destination}</div>
            <div className='element'>{amenities}</div>
            <div className='element'>{location}</div>
            <div className='element'>{level}</div>
            <div>
                <button onClick={() => {
                    handleView(true)
                }}>Edit Details</button>
                <button onClick={handleDelete}>delete</button>
            </div>
            <div>
                {visible ? <UpdateHoliday hData={hData} handleView={handleView} /> : <></>}
            </div>


        </div>
    )
}

export default TemplateHoliday