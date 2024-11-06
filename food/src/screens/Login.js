import React from 'react';

export default function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <form 
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
          <a href="/signup" className="text-primary text-decoration-none">Sign up</a>
        </div>
      </form>
    </div>
  );
}
