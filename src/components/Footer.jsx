import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'


export default function Footer() {
  return (
    <div className='bg-black text-white w-full h-[400px] p-7'>
      <div className='flex items-center justify-between p-12'>
        <div className='flex flex-col items-start'>
            <h3 className='mb-5 font-bodyFont'>For Business</h3>
            <p className='cursor-pointer hover:text-gray-500'>Team Meal And Munices Pack</p>
            <p className='cursor-pointer hover:text-gray-500'>Collaboration</p>
            <p className='cursor-pointer hover:text-gray-500'>Food Voucher And Gift</p>
            <p className='cursor-pointer hover:text-gray-500'>Lunch And Cakes</p>
        </div>
        <div className='flex flex-col items-start'>
            <h3 className='mb-5 font-bodyFont'>Our Services</h3>
            <p className='cursor-pointer hover:text-gray-500'>TCustomized Bulk Menus</p>
            <p className='cursor-pointer hover:text-gray-500'>Stalls And Outdoor Catering</p>
            <p className='cursor-pointer hover:text-gray-500'>Full Fledeged Mart</p>
            <p className='cursor-pointer hover:text-gray-500'>24 Hours Delivery</p>
            <p className='cursor-pointer hover:text-gray-500'>State of Art Kitchen</p>
        </div>
        <div className='flex flex-col items-start'>
            <h3 className='mb-5 font-bodyFont'>The Company</h3>
            <p className='cursor-pointer hover:text-gray-500'>Customer Service</p>
            <p className='cursor-pointer hover:text-gray-500'>Our Vision</p>
            <p className='cursor-pointer hover:text-gray-500'>About Us</p>
        </div>
        <div className='flex flex-col items-start'>
            <h3 className='mb-5 font-bodyFont'>Location</h3>
            <p className='cursor-pointer hover:text-gray-500'>Kathmandu</p>
            <p className='cursor-pointer hover:text-gray-500'>Pokhara</p>
        </div>
      </div>
      <div className='flex items-center justify-between'>
          <div className='flex items-center gap-8 mx-9'>
              <BsFacebook size={30} className='cursor-pointer hover:text-blue-700'/>
              <BsTwitter size={30} className='cursor-pointer hover:text-blue-300'/>
              <BsYoutube size={30} className='cursor-pointer hover:text-red-700'/>
              <BsInstagram size={30} className='cursor-pointer hover:text-purple-700'/>
          </div>
          <div className='flex items-center'>
            <img className='w-[170px] cursor-pointer' src="src/images/pic1.svg" alt="Payeent Picture" />
            <img className='w-[170px] h-[85px] cursor-pointer' src="src/images/pic2.png" alt="Get It On App Store" />
          </div>
      </div>
      <div className='w-full h-[3px] bg-white'></div>
      <p className='text-center'> &copy; Rohan Khatiwada 2023 , First React Project</p>
    </div>
  )
}
