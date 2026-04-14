import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'; 
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import Login from './Login';
import Register from './Register';
import { setSearchTerm } from '../redux/ProductSlice';


const NavBar = () => {
    const [Ismodalopen,setIsmodalopen]=useState(false);
    const[isLogin,setisLogin]=useState(true);
    const products=useSelector(state=>state.cart.products)
    const [search,setsearch]=useState()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handelsearch=(e)=>{
        e.preventDefault()
        dispatch(setSearchTerm(search))
        navigate('/filter-data')
    }
    const openLogin=()=>{
        setisLogin(true)
        setIsmodalopen(true)
        
    }
     const openRegister=()=>{
        setIsmodalopen(true)
    setisLogin(false)
    }
    return (
        <nav className='bg-white shadow-md'>
        <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
            <div className='text-lg font-bold'>
                <Link to="/">e-SHOP</Link>
                </div>
                <div className='relative flex-1 mx-4'>
                    <form  onSubmit={handelsearch}>
                        <input type='text' placeholder='search product' className='w-full border py-2 px-4' onClick={(e)=>setsearch(e.target.value)} />
             <FaSearch className='absolute top-3 right-3 text-red-500'></FaSearch>
                    </form>
                </div>
                <div className='flex items-center space-x-4'>
                    <Link to="/cart"className='relative' >
                       
                        <FaShoppingCart className=' text-lg'/>
                        {products.length>0 &&(
                            <span className='absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white  '>
                                {products.length}</span>
                        )}
                    </Link>
                    <button className='hidden md:block' onClick={() => setIsmodalopen(true)}>
                        Login|Register
                    </button>
                    <button className='block md:hidden'>
                     <FaUser/>
                    </button>
                </div>
            </div>
            <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
                <Link className='hover:underline' to="/">Home</Link>
                <Link className='hover:underline' to="/shop">Shop</Link>
                <Link className='hover:underline' to="/">About</Link>
                <Link className='hover:underline' to="/">Contact</Link>
            </div>
            <Modal Ismodalopen={Ismodalopen}  setIsmodalopen={setIsmodalopen}>
                {isLogin ? <Login openRegister={openRegister}/> : <Register openLogin={openLogin} />}
            </Modal>
        </nav>
    )
}

export default NavBar