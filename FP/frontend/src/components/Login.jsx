import React from 'react'

const Login = ({ openRegister }) => {
  return (
    <div>
        <h2 className='text-2xl font-bold mb-4'>Login</h2>
        <form>
            <div className='mb-4'>
                <label className='block text-gray-700'>Email:</label>
                <input type="email" className='w-full px-3 py-2 border'
                placeholder='Enter Your Email'/>
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700'>Password:</label>
                <input type="password" className='w-full px-3 py-2 border' placeholder='Enter your Password' />
            </div>
            <div className='mb-4 flex items-center justify-between'>
                <label className='inline-flex items-center'>
                    <input type="checkbox" className='form-checkbox' />
                    <span className='ml-2 text-gray-600'>Remember me</span>
                </label>
                <a href="#" className='text-red-800'> Forgot password?</a>
            </div>
            <div className='mb-4'>
            <button type="submit" className='bg-blue-500 text-white py-2 px-4 hover:bg-blue-600'>Login</button>
            </div>
        </form>
        <div className='text-center'>
            <span className='text-gray-700'>Don't have an account?</span>
            <button className='text-red-800' onClick={openRegister}>Sign Up</button>
        </div>
    </div>
  )
}

export default Login