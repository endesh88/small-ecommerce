import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaTrashAlt } from 'react-icons/fa'
import { useState } from 'react'
import Modal from '../components/Modal'
import Changeaddress from '../components/Changeaddress'
import { decreaseQuantity, removeFromcart, increaseQuantity } from '../redux/CartSlice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const [address, setAddress] = useState('main street,0012')
  const[Ismodalopen,setIsmodalopen]=useState(false)
  const dispatch=useDispatch();
  const navigate=useNavigate();
  return (
    <div className="container mx-auto px-4 py-8 min-h-96  md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div className="">
          <h3 className="text-2xl font-bold mb-4 ">Shopping Cart</h3>
          <div className=" flex flex-col md:flex-row  justify-between space-x-10 mt-8">
            <div className='md:w-2/3'>
              <div className='flex justify-between border-b items-center mb-4 text-xs font-semibold'>
                <p >Product</p>
                <div className='flex space-x-8'>
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>SubTotal</p>
                  <p>Remove</p>
                </div>
              </div >
         
          <div>
            {cart.products.map((product, idx) => (
              <div key={product.id ?? idx} className="flex items-center justify-between p-3 border-b">
                <div className="md:flex items-center space-x-4">
                  <img src={product.image} alt="" className="w-16 h-16 object-contain rounded " />
                  <div className='flex-1 ml-4'>
                    <h2 className="font-semibold text-lg">{product.name}</h2>
                  </div>
                </div>
                <div className="flex items-center space-x-12">
                  <p className="text-blue-600 font-bold">${product.price}</p>
                  <div className='flex items-center justify-center border'>
                    <button className="text-xl font-bold px-1.5 border-r" onClick={()=>dispatch(decreaseQuantity(product.id))}>-</button>
                    <span className=" text-xl px-2">{product.quantity}</span>
                    <button className="text-xl font-bold px-1 border-l" onClick={()=>dispatch(increaseQuantity(product.id))}>+</button>
                  </div>
                  <p className="px-2">${(product.price * product.quantity).toFixed(2)}</p>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => dispatch(removeFromcart(product.id))}
                  >
                    <FaTrashAlt size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
         
        </div>
         <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
            <h2 className='text-sm font-semibold mb-5'>Total Carts:</h2>
            <div className='flex justify-between mb-5 border-b pb-1'>
              <span className='text-sm'>
                Total Items:
              </span>
              <span>{cart.totalquantity}</span>
            </div>
            <div className='mb-4 border-b pb-2'>
              <p>Shipping:</p>
              <p className='ml-2'>Shipping to:</p>
              <span className='text-xs font-bold'>{address}</span>
              <button className='text-blue-600 hover:underline mt-1 ml-2' onClick={()=>setIsmodalopen(true)}>Change address</button>
            </div>
            <div className='flex justify-between mb-4' >
              <span>
                Total Price:
              </span>
              <span>{cart.totalprice?.toFixed(2)}</span>
            </div>
            <button className='w-full bg-red-600 text-white py-2 hover:bg-red-800' 
            onClick={()=>navigate('/checkout')}>Proceed to checkout</button>
          </div>
          </div>
          <Modal 
            Ismodalopen={Ismodalopen}
            setIsmodalopen={setIsmodalopen}
            title="Change Shipping Address"
          >
            <Changeaddress setAddress={setAddress} setIsmodalopen={setIsmodalopen}/>
          </Modal>
        </div>
        

      ) : (
        <div className=" flex justify-center">
          <p className="text-lg text-gray-600 h-96">Your cart is empty.</p>
        </div>
      )}
    </div>
  )
}

export default Cart