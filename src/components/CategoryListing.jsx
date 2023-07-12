import React  from 'react'
import { useNavigate } from 'react-router-dom'


export default function CategoryListing({product}) {

    const navigate = useNavigate()
    
    const myId = product.title
    const idString = () =>{
        return String(myId).toLowerCase().split(" ").join('')
    }

    const rootId = idString(myId)

   function handleClick () {
    navigate(`/product/${rootId}`,{
        state:{
            item:product

        }
    })
    }


  return (
    <div>
      <div className='group relative'>
       <div onClick={handleClick} className='w-full h-96 cursor-pointer overflow-hidden'>
        <img className='w-full h-full object-cover group-hover:scale-110 duration-500' src={product.image} alt="productImage" />
       </div>
       <div className='w-full border-[1px] px-2 py-4 '>
        <div className='flex justify-between items-center'>
        <div>
            <h2 className='font-titleFont font-bold text-base'>{product.title.substring(0,12)}</h2>
        </div>
        <div className='flex gap-2 justify-end relative overflow-hidden w-28 text-sm'>
            <div className='flex gap-2 z-30 transform  group-hover:translate-x-24 transition-transform duration-500'>
            <p className='font-semibold'>$ {product.price}</p>
            </div>
        </div>
        </div>
        <div>
            <p>{product.category}</p>
        </div>
        <div className='absolute top-4 right-1'>
            {product.isNew && <p className='bg-black text-white font-semibold font-titleFont px-6 py-1'>Sale</p>}
        </div>
       </div>
    </div>
    </div>
  )
}
