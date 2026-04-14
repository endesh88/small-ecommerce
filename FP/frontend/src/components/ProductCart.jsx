import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addTocart } from '../redux/CartSlice';

const ProductCart = ({product}) => {
    const dispatch=useDispatch();
    const handleAddtocart=(e,product)=>{
        e.stopPropagation()
        e.preventDefault()
        dispatch(addTocart(product))
        alert("Product Added Sccessfuly");
    }
    return (
        <div className='bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105'>
            <img src={product.image}  alt={product.title}className="w-full h-48 object-contain mb-4" />
            <h2 className='text-lg font-semibold'>{product.title}</h2>
            <p className='text-gray-600'>${product.price}</p>
            <div className='flex items-center mt-2'>
                <FaStar className='text-yellow-600'></FaStar>
                <FaStar className='text-yellow-600'></FaStar>
                <FaStar className='text-yellow-600'></FaStar>
                   <FaStar className='text-yellow-600'></FaStar>
            </div>
           <div className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all duration-300'
            onClick={(e)=>handleAddtocart(e,product)}>
  <span className='group-hover:hidden'>+</span>
  <span className='hidden group-hover:block'>Add to cart</span>
</div>

        </div>
    )
}

export default ProductCart