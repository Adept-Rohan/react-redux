import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { CiFacebook } from 'react-icons/ci'

export default function Login() {
  return (
    <div className='w-full h-[150vh] flex items-center'>
      <div style={{ backgroundImage: 'url(src/images/login.jpeg)' }} className='w-[50%] h-full flex items-center justify-center bg-white'>
        <div className='w-[80%] h-[80%] bg-black text-white'>
          <div className='flex flex-col items-center mt-12 '>
            <img src="src/images/logo.png" alt="Logo" className='w-32 object-cover' />
            <p className='font-bold mt-3'>FOODS. LIQOUR. CAKE</p>
            <p>24 Hours</p>
          </div>
          <div className='flex flex-col items-center mt-12'>
            <input className='w-[453px] h-[43px] rounded-xl p-5 text-black' type="email" placeholder='Enter Your Email' />
            <input className='w-[453px] h-[43px] rounded-xl p-5 mt-5 text-black' type="password" placeholder='Enter Your Password' />
            <button className='w-[453px] h-[43px] rounded-xl border-2 border-black bg-red-800 text-white mt-5 hover:bg-red-500'>Log In</button>
            <p>Or</p>
            <button className='flex items-center  gap-4 w-[453px] h-[43px] bg-white text-black rounded-xl mt-2'><span><FcGoogle size={25} /></span>  Log In By Gmail</button>
            <button className='flex items-center gap-4 w-[453px] h-[43px] bg-blue-900 rounded-xl mt-5 hover:bg-blue-500'><span><CiFacebook size={25} /></span>  Log In By Facebook</button>
          </div>
          <div className='flex flex-col items-center mt-12'>
            <p>Don't have An Account ? <span className='cursor-pointer text-bold text-green-700'>Sign Up?</span></p>
            <p className='text-bold cursor-pointer mt-2'>Forgot Password?</p>
            <p className='mt-20'>Kathamandu / Pokhara</p>
          </div>

        </div>

      </div>

      <div className='w-[50%] h-full'>
        <div style={{ backgroundImage: 'url(src/images/background.jpg)' }} className='w-full h-full object-cover text-white flex flex-col items-end justify-center'>
          <h1 className=' text-[32px]  text-center mb-6 mr-4'>Authentic Thakali Set</h1>
          <p className='text-base text-[18px]'>Try out the local cusine of the Himalayas that keeps you warm.</p>
        </div>
      </div>
    </div>
  )
}
