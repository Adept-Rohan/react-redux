import React from 'react'

export default function Aboutme() {
  return (
    
    <div className='flex'>
      <div className='w-[50%]'>
      <img className='w-[450px] h-[320px] object-cover rounded-full p-4' src="src/images/rohan.jpg" alt="Myself" />
      </div>
      <div className='w-[50%] mt-4 p-4 flex flex-col'>
        <h2 className='font-bold'>Rohan Khatiwada</h2>
        <p className='text-base text-gray-700 mt-6'>Me Myself, Rohan a very passionate Web Developer who is always keen to learn programming. Currently, the student of Patan Multiple Campus undergoing Bachelor in science and CSIT. Hope you liked my work.</p>
        <ul className='mt-8'>
        <li>Content Writer [1 Years of Experience] </li>
        <li>Aspiring Web Developer</li>
      </ul>
      </div>
     
    </div>
  )
}
