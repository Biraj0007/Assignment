import React, { useState } from 'react'
import './Login_Signup.css'

const Login_Signup = () => {
  const [ad, setAd] = useState(true)
  const [credential, setCredential] = useState({
    email: '',
    password: ""
  })
  const onChangeHandle = (e) => {
    setCredential(
      { ...credential, [e.target.name]: e.target.value }
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:5000/api/auth/adminLogin", {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        admin_id: credential.email
        , admin_password: credential.password
      })
    }).then((x) => {
      return x.json()
    }).then((x) => {
      console.log(x)

      if (x?.login) {
        localStorage.setItem('email', [credential.email, credential.password])
      }
      // navigate('/uploads')
    }).catch((x) => {
      console.log(`error occured${x}`);
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='LoginContainer'>
        <h2 className='heading'>
          {ad ? "Admin " : "Employee"} Login Page
        </h2>
        <div className='inp'>
          <input name="email" type='email' onChange={onChangeHandle} value={credential.email} placeholder='enter email.......' />
        </div>
        <div className='inp'>
          <input name="password" type='password' onChange={onChangeHandle} value={credential.password} placeholder='enter password...' />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        <p onClick={() => {
          setAd(() => {
            return !ad
          })
          setCredential({
            email: '',
            password: ""
          })
        }}>click here to Login as {ad ? 'Employee' : 'Admin'}</p>
      </div>
    </form>
  )
}

export default Login_Signup