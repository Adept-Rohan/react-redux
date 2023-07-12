import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../redux/CartSlice'


export default function ProductListing({ product }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const mykey = product.id

    const myId = product.title
    const idString = () => {
        return String(myId).toLowerCase().split(" ").join('')
    }

    const rootId = idString(myId)

    function handleClick() {
        navigate(`/product/${rootId}`, {
            state: {
                item: product

            }
        })
    }

    return (
        <div>
            <div className='group relative'>
                <div key={mykey} onClick={handleClick} className='w-full h-96 cursor-pointer overflow-hidden'>
                    <img className='w-full h-full object-cover group-hover:scale-110 duration-500' src={product.image} alt="productImage" />
                </div>
                <div className='w-full border-[1px] px-2 py-4 '>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h2 className='font-titleFont font-bold text-base'>{product.title.substring(0, 12)}</h2>
                        </div>
                        <div className='flex gap-2 justify-end relative overflow-hidden w-28 text-sm'>
                            <div className='flex gap-2 z-30 transform  group-hover:translate-x-24 transition-transform duration-500'>
                                <p className='font-semibold'>$ {product.price}</p>
                            </div>
                            <p onClick={() => dispatch(addToCart({
                                id: product._id,
                                title: product.title,
                                image: product.image,
                                price: product.price,
                                quantity: 1,
                                description: product.description
                            }))} className='absolute z-20 w-[300px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform-translate-x-40  group-hover:translate-x-48 transition-transform duration-500 cursor-pointer'>add to Cart <span><AiOutlineArrowRight /></span></p>
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
