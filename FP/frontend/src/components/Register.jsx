import React from 'react'

const Register = ({ openLogin }) => {
  return (
    <div>
        <h2 className='text-2xl font-bold mb-4'>Register</h2>
        <form>
              <div className='mb-4'>
                <label className='block text-gray-700'>Name:</label>
                <input type="text" className='w-full px-3 py-2 border'
                placeholder='Enter Your Name'/>
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700'>Email:</label>
                <input type="email" className='w-full px-3 py-2 border'
                placeholder='Enter Your Email'/>
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700'>Password:</label>
                <input type="password" className='w-full px-3 py-2 border' placeholder='Enter your Password' />
            </div>
           
            <div className='mb-4'>
            <button type="submit" className='bg-blue-500 text-white py-2 px-4 hover:bg-blue-600'>Sign Up</button>
            </div>
        </form>
        <div className='text-center'>
            <span className='text-gray-700'> Already have an account?</span>
            <button className='text-red-800' onClick={openLogin}>Sign In</button>
        </div>
    </div>
  )
}

export default Register