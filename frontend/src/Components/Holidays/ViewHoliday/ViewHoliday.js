import React, {useEffect, useState} from 'react'
import './ViewHoliday.css'
import TemplateHoliday from './TemplateHoliday/TemplateHoliday'

const ViewHoliday = () => {
    const [holidayList, setHolidayList] = useState([])
    // const [data, setData] = useState([])
    useEffect(()=>{
        const data = localStorage.getItem('email').split(',')
        fetch("http://localhost:5000/api/auth/viewHoliday", {
            method: 'POST',
            headers: {
              'Content-Type': "application/json"
            },
            body: JSON.stringify({
                admin_id: data[0], admin_password:data[1]
            }) 
          }).then((x) => {
            return x.json()
            
          }).then((x) => {
            console.log(x)
            if(x.success==true){
                setHolidayList(x?.data
            )
            }
          }).catch((x) => {
            console.log(`error occured${x}`);
          })
    },[])
  return (
    <div className='viewContainer'>
        {holidayList.map((x,i)=>{
            return <TemplateHoliday hData={x}/>
        })}
    </div>
  )
}

export default ViewHoliday