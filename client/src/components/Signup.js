import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='signup template d-flex justify-content-center align-items-center bg-primary'>
    <div className='form_container p-5 rounded bg-white'>
        <form>
            <h3 className='text-center'>Sign Up</h3>
            <div className='mb-2'>
                <label htmlFor='firstName'>Fisrt Name</label>
                <input type='firstName' placeholder='Enter First Name' className='form-control' />
            </div>

            <div className='mb-2'>
                <label htmlFor='lastName'>Last Name</label>
                <input type='lastName' placeholder='Enter Last Name' className='form-control' />
            </div>

            <div className='mb-2'>
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='Enter Email' className='form-control' />
            </div>

            <div className='mb-2'>
                <label htmlFor='password'>Password</label>
                <input type='password' placeholder='Enter Password' className='form-control' />
            </div>

            <div className='d-grid'>
                <button className='btn btn-primary'>Sign Up</button>
            </div>

            <p className='text-end mt-2'>
                Already Registered? 
            </p>

            <p className='text-end mt-2'>
              <Link to="/" className="ms-2">Sign In</Link> 
            </p>
        
        </form>
    </div>
</div>
  )
}

export default Signup