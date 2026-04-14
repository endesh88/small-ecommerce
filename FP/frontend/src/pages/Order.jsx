import React from 'react'
import { useNavigate } from 'react-router-dom';



const Order = ({order}) => {
  const navigate=useNavigate();
  
  if (!order) {
    return <div>Loading order...</div>
  }

  return (
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
      <h2 className='text-2xl font-semibold mb-4'>Thank You For Your Order</h2>
      <p>Your order has been placed successfully! You will receive a confirmation email shortly.</p>

      <div className='mt-6 p-4 border rounded-lg bg-gray-100'>
        <h2 className='text-lg font-semibold mb-2'>Order Summary</h2>
        <p>Order Number: {order.orderNumber}</p>

        <div className='mt-4'>
          <h3 className='text-md font-semibold mb-2'>Shipping Information</h3>
          <p>Address: {order.shippingInformation?.address}</p>
          <p>City: {order.shippingInformation?.city}</p>
          <p>Zip Code: {order.shippingInformation?.zipCode}</p>
        </div>

        <div className='mt-4'>
          <h3 className='text-md font-semibold mb-2'> Ordered Products</h3>
          {(order.products?.length ?? 0) === 0 ? (
            <p>No items found in this order.</p>
          ) : (
            order.products.map((product) => (
              <div key={product.id } className='flex justify-between mt-2'>
                <p>{product.name} x {product.quantity}</p>
                <p>${product.price * product.quantity}</p>
              </div>
            ))
          )}
        </div>

        <div className='mt-4 flex justify-between'>
          <span>Total Price</span>
          <span className='font-semibold'> ${order.totalprice?.toFixed(2)}</span>
        </div>
        </div>
        <div className='mt-6'>
          <button className='bg-green-500 text-white py-2 px-4 hover:bg-green-600'>Track Order</button>
        <button className='ml-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800' onClick={()=>navigate ('/')}>Continue Shopping</button>
        </div>
      </div>
  )
}

export default Order