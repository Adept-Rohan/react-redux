import React from 'react'
import Item from '../components/Item'

export default function Categories() {

  return (
    <>
      <div className='w-full h-full'>
        <h2 className='font-bold text-center mt-6'>Categories</h2>
        <div className='flex items-center justify-between mt-5 px-32'>
          <button className='w-[120px] h-[25px] bg-black text-white rounded-xl hover:bg-gray-900'>All</button>
          <button value='Men' className='w-[120px] h-[25px] bg-black text-white rounded-xl hover:bg-gray-900'>Men</button>
          <button value='Women' className='w-[120px] h-[25px] bg-black text-white rounded-xl hover:bg-gray-900'>Women</button>
          <button value='Kids' className='w-[120px] h-[25px] bg-black text-white rounded-xl hover:bg-gray-900'>Kids</button>
        </div>
        <Item />
      </div>
    </>
  )
}
