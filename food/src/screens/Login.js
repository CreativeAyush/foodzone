import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

export default function Login() {
  const [credentials, setcredentials]= useState({email:"",password:""})//defautl value
  let navigate=useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault()    //synthetc event
    console.log(stringify({email: credentials.email,password: credentials.password}))
    const response = await fetch("http://localhost:5000/api/loginuser",{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email:credentials.email,password:credentials.password})
    })
    const json=await response.json()
    console.log(json);
    if(!json.success){
      alert("enter valed")
    }
    if(json.success){
      localStorage.setItem("authToken",json.authToken)
      navigate("/")   //agr success to new screen pr
    }
    
  }
  const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value}) //state change ke leye value set krne ke leye pehel jo defaut valute the
  }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <form onSubmit={handleSubmit}
        className="p-4 border rounded shadow-lg text-light"
        style={{ 
          width: '300px',
          backgroundColor: '#333',
          boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)' // subtle glow effect
        }}
      >
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
        <div className="mb-3 form-check">
          <input 
            type="checkbox" 
            className="form-check-input" 
            id="exampleCheck1" 
          />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
        
        <div className="text-center mt-3">
          <span className="text-light">Don't have an account? </span>
          <Link to="/signup" className="text-primary text-decoration-none">Sign up</Link>
        </div>
      </form>
    </div>
  );
}
