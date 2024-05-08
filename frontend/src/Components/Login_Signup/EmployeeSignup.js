import React, { useState } from 'react'
import './EmployeeSignup.css'

const EmployeeSignup = () => {
    const [empCredential, setempCredential] = useState({
        name: '',
        email: "",
        password: "",
        empId: ""
    })
    const onChangeHandle = (e) => {
        setempCredential(
            { ...empCredential, [e.target.name]: e.target.value }
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(empCredential);
        fetch("http://localhost:5000/api/auth/employeeSignup", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                ...empCredential
            })
        }).then((x) => {
            return x.json()
        }).then((x) => {
            console.log(x)

            // navigate('/uploads')
        }).catch((x) => {
            console.log(`error occured${x}`);
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='signUpContainer'>
                    <div className='inp3'>
                        <input name="name" type='text' onChange={onChangeHandle} value={empCredential.name} placeholder='enter name.......' />
                    </div>
                    <div className='inp3'>
                        <input name="email" type='email' onChange={onChangeHandle} value={empCredential.email} placeholder='enter email.......' />
                    </div>
                    <div className='inp3'>
                        <input name="password" type='password' onChange={onChangeHandle} value={empCredential.password} placeholder='enter password...' />
                    </div>
                    <div className='inp3'>
                        <input name="empId" type='number' onChange={onChangeHandle} value={empCredential.empId} placeholder='enter employeeID.......' />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EmployeeSignup