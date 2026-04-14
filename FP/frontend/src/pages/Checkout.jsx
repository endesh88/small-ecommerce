import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ setOrder }) => {
  const [billingToogle,setbillingToogle]=useState(true);
  const[ShippingToogle,setShippingToogle]=useState(false);
  const[paymentToogle,setpaymentToogle]=useState(false);
  const[paymentMethod,setpaymentMethod]=useState('cod');
  const Cart=useSelector(state=>state.cart);
  const [ShippingInformation,setShippingInformation]=useState({
    address: '',
    city: '',
    zipCode: '',
  
  })
  const navigate=useNavigate();
 

  const handelorder=()=>{
    const neworder={
      products:Cart.products,
      orderNumber:"123444",
      shippingInformation:ShippingInformation,
      totalprice:Cart.totalprice
    }
    setOrder(neworder)
    navigate('/order-confirmation')
  }
  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
      <h3 className='text-2xl font-semibold mb-4'>CheckOut</h3>
      <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
        <div className='md:w-2/3'>
          <div className='border p-2 mb-6'>
            <div className='flex items-center justify-between' onClick={()=>setbillingToogle((!billingToogle))}>
              <h2 className='text-lg font-semibold mb-2'>Billing Information</h2>
              {billingToogle?<FaAngleDown/>:<FaAngleUp/>}
            </div>

            <div className={`space-y-4 ${billingToogle?"":'hidden'}`}>
              <div>
                <label htmlFor="" className='block text-gray-700'>Name</label>
                <input type="text" name='name' placeholder='Enter Name' className='w-full px-3 py-2 border' />
              </div>
              <div>
                <label className='block text-gray-700'>Email</label>
                <input type="text" 
                  name='Email'
                  placeholder='Enter Your Email'
                  className='w-full px-3 py-2 border'/>
              </div>
              <div>
                <label className='block text-gray-700'>Phone</label>
                <input type="text" 
                  name='Phone'
                  placeholder='Enter Your Phone'
                  className='w-full px-3 py-2 border'/>
              </div>
            </div>
          </div>
        </div>

        <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
          <h2 className='text--lg font-semibold mb-4'> Order Summary</h2> 
          <div className='space-y-4'>
            {Cart.products.map((product)=>(
              <div key={product.id} className='flex justify-between'>
                <div className='flex items-center'>
                  <img src={product.image} alt="" className='w-16 h-16 object-contain rounded' />

                </div>
                <div className='ml-4'>
                  <h4 className='text-md font-semibold'>{product.name}</h4>
                  <p className='text-gray-600'>{`$${product.price} x ${product.quantity}`}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='mt-4 border-t pt-4'>
            <div className='flex justify-between'>
              <span>Total Price:</span>
              <span className='font-semibold'>{`$${Cart.totalprice.toFixed(2)}`}</span>
            </div>
          </div>
          <button className='mt-6 bg-blue-500 text-white py-2  hover:bg-red-800' onClick={handelorder}>
            Place Order
          </button>
        </div>
      </div>

     {/* Moved below sections inside the same container to avoid multiple root elements */}
     <div className='md:w-2/3 mt-8'>
       <div className='border p-2 mb-6'>
         <div className='flex items-center justify-between' onClick={()=>setShippingToogle((!ShippingToogle))}>
           <h2 className='text-lg font-semibold mb-2'>Shipping Information</h2>
           {ShippingToogle?<FaAngleDown/>:<FaAngleUp/>}
         </div>
         <div className={`space-y-4 ${ShippingToogle?"":'hidden'}`}>
           <div>
             <label htmlFor="" className='block text-gray-700'>Address</label>
             <input type="text" name='address' placeholder='Enter Address' className='w-full px-3 py-2 border'
               onChange={(e)=>{setShippingInformation({...ShippingInformation,address:e.target.value})}} />
           </div>
           <div>
             <label className='block text-gray-700'>City</label>
             <input type="text" 
               name='City'
               placeholder='Enter  City'
               className='w-full px-3 py-2 border'
               onChange={(e)=>{setShippingInformation({...ShippingInformation,city:e.target.value})}}/>
           </div>
           <div>
             <label className='block text-gray-700'>Zip Code</label>
             <input type="text" 
               name='ZipCode'
               placeholder='Enter Your zip code'
               className='w-full px-3 py-2 border'
               onChange={(e)=>{setShippingInformation({...ShippingInformation,zipCode:e.target.value})}}/>
           </div>
         </div>
       </div>
     </div>
     <div className='md:w-2/3'>
       <div className='border p-2 mb-6'>
         <div className='flex items-center justify-between' onClick={()=>setpaymentToogle((!paymentToogle))}>
           <h2 className='text-lg font-semibold mb-2'>Payment Method</h2>
           {paymentToogle?<FaAngleDown/>:<FaAngleUp/>}
         </div>

         <div className={`space-y-4 ${paymentToogle?"":'hidden'}`}>
           <div className='flex items-center mb-4'>
             <input type="radio" name='payment' value='cod' className='mr-2' checked={paymentMethod === 'cod'} onChange={(e) => setpaymentMethod(e.target.value)} />
             <label htmlFor="" className='block text-gray-700 ml-2'>Cash On Delivery</label>
           </div>
           <div className='flex items-center mb-4'>
             <input type="radio" name='payment' value='debit' className='mr-2' checked={paymentMethod === 'debit'} onChange={(e) => setpaymentMethod(e.target.value)} />
             <label htmlFor="" className='block text-gray-700 ml-2'>Debit</label>
           </div>
           {paymentMethod==='debit'&&(
             <div className='bg-gray-100 p-4 rounded-lg mb-4'>
               <h2 className='text-lg font-semibold mb-4'>Debit Card Information</h2>
               <div className='mb-4'>
                 <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>Card Number</label>
                 <input type="text"  placeholder="Enter Card Number" className='w-full p-3 py-2 rounded border' required />
               </div>
               <div className='mb-4'>
                 <label htmlFor=" " className='block text-gray-700 font-semibold mb-2'>Card Holder Name</label>
                 <input type="text" placeholder="Enter Card Holder Name" className='w-full p-3 py-2 rounded border' required />
               </div>
               <div className='flex justify-between mb-4'>
                 <div className='w-1/2 mr-2'>
                   <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>Expire Date</label>
                   <input type="text" placeholder="MM/YY" className='w-full p-3 py-2 rounded border' required />
                 </div>
                 <div>
                   <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>CW</label>
                   <input type="text" placeholder="Enter CW" className='w-full p-3 py-2 rounded border' required />
                 </div>
               </div>
             </div>
           )}
         </div>
       </div>
     </div>
    </div>
  )
}

export default Checkout