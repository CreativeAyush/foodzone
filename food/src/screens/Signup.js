import React from 'react'

export default function Signup() {
  return (
    <div>
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <form 
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
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control bg-dark text-light border-secondary" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control bg-dark text-light border-secondary" 
            id="exampleInputPassword1" 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleConfirmPassword" className="form-label">Confirm Password</label>
          <input 
            type="password" 
            className="form-control bg-dark text-light border-secondary" 
            id="exampleConfirmPassword" 
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        
        <div className="text-center mt-3">
          <span className="text-light">Already have an account? </span>
          <a href="/login" className="text-primary text-decoration-none">Log in</a>
        </div>
      </form>
    </div>
  );
    </div>
  )
}
