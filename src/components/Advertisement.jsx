 import React, {useState} from 'react'
import{AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineSearch} from 'react-icons/ai'

export default function Advertisement() {
   
    const [currentSlide , setCurrentSlide] = useState(0)
    
    const prevSlide = () =>{
        setCurrentSlide(currentSlide ===0 ? 1: (prev)=>prev-1)
    }

    const nextSlide = () =>{
        setCurrentSlide(currentSlide===1 ? 0: (prev)=>prev+1)
    }
  return (
    <>
   <div className='relative'>
    <AiOutlineSearch size={30} className='absolute left-[830px] top-11 cursor-pointer'/>
    <input type="text" placeholder='Try Something New Today' className='w-[472px] h-[54px] border-[1px] rounded-xl mx-[400px] mt-[32px] p-5' />
   </div>
   <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} className='flex w-[200vw] h-auto overflow-x-hidden duration-300 z-10 mt-12'>
      <div className='p-5 mx-16 flex gap-6'>
        <div style={{backgroundImage:'url(src/images/background.jpg)'}} className='w-[600px] h-[483px] rounded-xl object-cover text-white flex flex-col items-end justify-end '>
            <h1 className=' text-[32px]  text-right mb-6 mr-4'>Authentic Thakali Set</h1>
            <p className='text-base text-[18px]'>Try out the local cusine of the Himalayas that keeps you warm.</p>
        </div>
        <div className='flex flex-col gap-4'>
            <div style={{backgroundImage:'url(src/images/background3.jpg)'}} className='w-[490px] h-[230px] object-cover rounded-xl overflow-y-hidden text-white flex flex-col items-end justify-end'>
            <h1 className=' text-[32px]  text-right mb-6 mr-4'>Burger King</h1>
            <p className='text-base text-[18px]'>Try out the American Flavour Right Here in the Himalayas.</p>
            </div>
            <div style={{backgroundImage:'url(src/images/food.jpeg)'}} className='w-[490px] h-[235px] object-fill overflow-y-hidden rounded-xl  text-white flex flex-col items-end justify-end'>
            <h1 className=' text-[32px]  text-right mb-6 mr-4'>MoMo's Like Never Before</h1>
            <p className='text-base text-[18px]'>The stable lunch for all the Nepalese with a new taste.</p>
            </div>
        </div>
      </div>

      <div className='p-5 mx-10 flex gap-6'>
        <div style={{backgroundImage:'url(src/images/background.png)'}} className='w-[600px] h-[483px] rounded-xl object-cover  text-white flex flex-col items-end justify-end '>
        <h1 className=' text-[32px]  text-right mb-6 mr-4'>Shina Ramen</h1>
            <p className='text-base text-[18px]'>Try Out The New Shina Ramen, Dont forget to bring Ice-cream</p>
        </div>
        <div className='flex flex-col gap-4'>
            <div style={{backgroundImage:'url(src/images/pizza.jpg)'}} className='w-[490px] h-[230px] object-cover rounded-xl  text-white flex flex-col items-end justify-end'>
            <h1 className=' text-[32px]  text-right mb-6 mr-4'>Pizza With The Italian Taste</h1>
            <p className='text-base text-[18px]'>Try out the Italian Flavour Right Here in the Himalayas.</p>
            </div>
            <div style={{backgroundImage:'url(src/images/sekuwa.jpg)'}} className='w-[490px] h-[235px] object-cover rounded-xl  text-white flex flex-col items-end justify-end'>
            <h1 className=' text-[32px]  text-right mb-6 mr-4'>The Juicy and Steamy Sekuwa</h1>
            <p className='text-base text-[18px]'>Sekuwa Taste Better With Coke.</p>
            </div>
        </div>
      </div>
      
      </div>
      <div className='relative my-3'>
 <AiOutlineArrowLeft className='relative left-[650px] top-[-20px] cursor-pointer' onClick={prevSlide} size={25}/>
 <AiOutlineArrowRight onClick={nextSlide} className='relative left-[688px] top-[-45px] cursor-pointer' size={25}/>
</div> 

<div>
    <img src="src/images/sinaramen.png" className='mx-20 mb-20 w-[90%] h-[170px]' alt="Shina Ramen" />
</div>

</>
)
}
