import React from 'react'
import ProductCart from '../components/ProductCart';
import { useSelector } from 'react-redux';

const Filter = () => {
  const filteredproducts = useSelector(state => state.product.filteredData);

  return (
    <div className='container mx-auto py-12 px-4 md:px-16 lg:px-24'>
          <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
            { filteredproducts .map((product) => (
             <ProductCart key={product.id} product={product}/>
            ))}
          </div>
        </div>
  )
}

export default Filter