import React from 'react'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'


export default function Cart() {
  const productData = useSelector((state) => state.cart.productData)
  console.log(productData)
  return (
    <>
      <div className='mx-[5%] py-20 flex'>
        <CartItem />
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] pb-6 border-b-gray-400' >
            <h2 className='text-2xl font-medium'>Cart Total</h2>
            {/* <p className='flex item-center gap-4 text-base'>
              Subtotal {' '}
              <span className='font-titleFont font-bold text-lg'>
                ${200}
              </span></p> */}
            <p className='flex items-center gap-4 text-base'>
              Shippng {" "}
              <span className='font-titleFont font-bold text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, optio.</span>
            </p>
            <p className='flex justify-between item-center mt-6 text-base'>
              Total Price {' '} <span className='font-titleFont font-bold text-lg'>
                ${productData.price}
              </span>
            </p>
          </div>
          <button className='w-[350px] mt-4 h-[32px] bg-black text-white'>Proceed To Checkout</button>
        </div>
      </div>
    </>
  )
}
