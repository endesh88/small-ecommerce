import React from 'react'

import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className='bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='text-xl font-semibold'>
                    <h2>E-COMMERCE-SHOP</h2>
                    <p className='mt-4'> Enjoy safe payments, fast delivery, and reliable customer support. Your satisfaction is always our top priority.</p>

                </div>

                <div className='flex flex-col md:items-center'>
                    <h3 className='text-lg font-semibold'> Quick Links</h3>
                    <ul className='mt-4 space-y-2'>
                        <li>
                            <Link to="/" className="hover:underline">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop" className="hover:underline">Shop</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:underline">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:underline">Contact</Link>
                        </li>
                        
                    </ul>
                </div>
                <div className=''>
                    <h2 className='text-lg font-semibold'>Follow Us</h2>
                    <div className='flex space-x-4 mt-4'>
                        <a href="" className='hover:text-blue-400'><FaTwitter /></a>
                        <a href="" className='hover:text-blue-400'><FaLinkedin/></a>
                        <a href="" className='hover:text-blue-400'><FaInstagram/></a>
                        <a href="" className='hover:text-blue-400' ><FaGithub/></a>
                    </div>
                   <form className='flex mt-8'>
  <input type='email' placeholder='Enter your email' className='flex-1 p-2 rounded-l-lg bg-gray-600 border border-gray-500 text-white focus:outline-none' />
  <button className='bg-red-700 text-white px-4 py-2 rounded-r-lg hover:bg-red-800'>Subscribe</button>
</form>

             </div>
            </div>
            <div className=' mt-8 border-t border-white-700  pt-4'>
                <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
                    <p>&copy;2025 E-COMMERCE-SHOP All rights reserved.</p>
                     <div className='flex space-x-6 mt-4 md:mt-0'>
                        <a href="" className='hover:underline'> Privacy Policy</a>
                        <span>&& </span>
                     <a href="" className='hover:underline'>   Terms Conditions</a>
                </div>
                </div>
               
            </div>
        </footer>
       
    )
}

export default Footer