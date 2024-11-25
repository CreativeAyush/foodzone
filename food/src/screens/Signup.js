import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Signup() {
  const [credentials, setcredentials]= useState({name:"",email:"",password:"",geolocation:""})//defautl value
  const handleSubmit=async(e)=>{
    e.preventDefault()    //synthetc event
    const response = await fetch("http://localhost:5000/api/createuser",{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
    })
    const json=await response.json()
    console.log(json);
    if(!json.success){
      alert("enter valed")
    }
  }
  const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value}) //state change ke leye value set krne ke leye pehel jo defaut valute the
  }
  return (
    <div>
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <form onSubmit={handleSubmit} 
        className="p-4 border rounded shadow-lg text-light"
        style={{ 
          width: '300px',
          backgroundColor: '#333',
          boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)' // subtle glow effect
        }}
      >
        <h3 className="text-center mb-4">Sign Up</h3>
        
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">Full Name</label>
          <input 
            type="text" 
            className="form-control bg-dark text-light border-secondary" 
            id="exampleInputName" 
            name='name'
            value={credentials.name}
            onChange={onChange}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control bg-dark text-light border-secondary" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            name='email'
            value={credentials.email}
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control bg-dark text-light border-secondary" 
            id="exampleInputPassword1" 
            name='password'
            value={credentials.password}
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleConfirmPassword" className="form-label">location</label>
          <input 
            type="text" 
            className="form-control bg-dark text-light border-secondary" 
            id="exampleConfirmPassword"
            name='geolocation'
            value={credentials.geolocation}
            onChange={onChange} 
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        
        <div className="text-center mt-3">
          <span className="text-light">Already have an account? </span>
          <Link to="/login" className="text-primary text-decoration-none">Log in</Link>
        </div>
      </form>
    </div>
  );
    </div>
  )
}
