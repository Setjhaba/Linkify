import React from 'react'

function Login() {
  return (
    <div className='login template d-flex justify-content-center align-items-center h-100 bg-primary'>
        <div className='border-border-danger p-5 rounded bg-white'>
            <form>
                <h3 className='text-center'>Sign In</h3>
                <div className='=mb-2'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Enter Email' className='form-control' />
                </div>

                <div className='=mb-2'>
                    <label htmlFor='passwprd'>Password</label>
                    <input type='password' placeholder='Enter Password' className='form-control' />
                </div>

                <div className='mb-2'>
                    <input type='checkbox' className='custom-control-custom-checkout' id='check' />
                    <label htmlFor='check' className='custom-input-label ms-2'>Remember Me</label>
                </div>

                <div className='d-grid'>
                    <button className='btn btn-primary'>Sign In</button>
                </div>

                <p className='text-end mt-2'>
                    Forgot <a href='' className='ms-2'>Password?</a><a>Sign Up</a> 
                </p>
            
            </form>
        </div>
    </div>
  )
}

export default Login