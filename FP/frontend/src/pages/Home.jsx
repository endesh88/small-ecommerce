import React, { useEffect } from 'react'
import { Catagories, monckData } from "../assets/monckData";

import HeroIcon from '../assets/Images/6455.jpg'
import Information from '../components/Information'
import Catagory from '../components/Catagory'

import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/ProductSlice';

import Shop from './Shop';
import ProductCart from '../components/ProductCart';


const Home = () => {
  const dispatch = useDispatch();
  const productState = useSelector(state => state.product)

  useEffect(() => {
    dispatch(setProducts(monckData))
  }, [dispatch])

  const topProducts = (productState?.products || []).slice(0, 5)

  return (
    <div>
      <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
        <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
          <div className='w-full md:w-2/12'>
            <div className='bg-red-500 text-white text-xs font-bold px-3 py-2.5'>
              SHOP BY CATAGORIES
            </div>
            <ul className='space-y-4 bg-gray-400 p-3 border'>
              {Catagories.map((catagory, index) => (
                <li key={index} className='flex items-center text-sm font-medium'>
                  <div className='w-2 h-2 border border-blue-600 rounded-full mr-2'></div>
                  {catagory}
                </li>
              ))}
            </ul>
          </div>

          <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative'>
            <img src={HeroIcon} alt="" className='h-full w-full' />
            <div className='absolute top-16 left-8'>
              <p className='text-blue-600 mb-4'>Work With Endeshaw</p>
              <h2 className=' text-3xl  font-bold text-blue-600 mb-4'>Wellcome To E-Shop</h2>
              <p className='text-xl mt-2.5 font-bold text-blue-600'>MILLIONS+Products</p>
              <button className='
                bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700
                transform transition-transform duration-300 hover:scale-105'>Shop Now</button>
            </div>
          </div>
        </div>

        <Information />
        <Catagory />

        <div className='container mx-auto py-12'>
          <h2 className='text-2xl font-bold mb-6 text-center'>Top Products</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 '>
            {topProducts.map((product, idx) => (
              <ProductCart key={product.id ?? idx} product={product} />
            ))}
          </div>
        </div>
      </div>

      <Shop/>
    </div>
  )
}

export default Home