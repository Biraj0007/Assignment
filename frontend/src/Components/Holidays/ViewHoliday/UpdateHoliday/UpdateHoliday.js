import React, {useEffect, useState} from 'react'
import './UpdateHoliday.css'
const UpdateHoliday = ({hData,handleView}) => {
 const [ adding, setAdding] = useState({
    name:'',
    duration:'',
    destination:'',
    location:'',
    amenities:'',
    level:0,
    admin_id:'', 
    admin_password:''
 })
useEffect(()=>{
    const op = localStorage.getItem('email').split(',')
    if(op){
    setAdding({...adding, ...hData, admin_id:op[0],
    admin_password:op[1]})
    }
},[])

 const onChangeHandle  = (e)=>{
    setAdding({...adding, [e.target.name]:e.target.value})
 }

 const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(adding.admin_id, adding.admin_password);
   if(adding.admin_id!=''){
    fetch("http://localhost:5000/api/auth/editHoliday", {
      method: 'PUT',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        ...adding, _id:hData?._id
      })
    }).then((x) => {
      return x.json()
      
    }).then((x) => {
      console.log(x)
      if(x.success==true){
        setAdding({...adding,
            name:'',
            duration:'',
            destination:'',
            location:'',
            amenities:'',
            level:0,
            
      })
      }
    }).catch((x) => {
      console.log(`error occured${x}`);
    })
 }
 }
  return (
    <div className='floatContainer'>
    <form onSubmit={handleSubmit}>
      <div className='updateHolidayContainer'>
        <div className='inp2'>
          <input name="name" type='text' onChange={onChangeHandle} value={adding.name} placeholder='enter holiday name' />
        </div>
        <div className='inp2'>
          <input name="duration" type='text' onChange={onChangeHandle} value={adding.duration} placeholder='enter duration...' />
        </div>
        <div className='inp2'>
          <input name="destination" type='text' onChange={onChangeHandle} value={adding.destination} placeholder='enter destination...' />
        </div>
        <div className='inp2'>
          <input name="location" type='text' onChange={onChangeHandle} value={adding.location} placeholder='enter location...' />
        </div>
        <div className='inp2'>
          <input name="amenities" type='text' onChange={onChangeHandle} value={adding.amenities} placeholder='enter amenities...' />
        </div>
        <div className='inp2'>
          <input name="level" type='number' onChange={onChangeHandle} value={adding.level} placeholder='enter level between 1 to 5' min="1" max="5"/>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">Click To Update</button>
        </div>
      </div>
    </form>
    <button className='close' onClick={()=>{
      handleView(false)
    }
    }>close</button>
    </div>
  )
}

export default UpdateHoliday