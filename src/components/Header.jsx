import React ,{useState} from 'react'
import {GoLocation} from 'react-icons/go'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose, AiFillHome} from 'react-icons/ai'
import {TbCategory} from 'react-icons/tb'
import {BsFillCartFill, BsPeopleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {

 const productData = useSelector((state)=> state.cart.productData)

    const [nav , setNav] = useState (false)
    const [dropdown , setDropDown] = useState(false)
    const initialText = "Kathmandu"
    const newText1 = "Pokhara"
    const [text , setText] = useState(initialText)
    const [newText , setNewText] = useState(newText1)
    
   const handleChange = ()=>{
    if(text === initialText && newText ===  newText1){
      setText('Pokhara')
      setNewText('Kathmandu')
    }else if(text=== newText1 && newText === initialText){
      setText('Kathmandu')
      setNewText('Pokhara')
    }else{
      return 0
    }    
   }

    return (
      <>
      <div className='w-full h-auto flex items-center justify-between bg-black text-white p-5'>
        <div className='flex items-center gap-8 relative'>
         <Link to='/'><img className='w-24' src="src/images/logo.png" alt="Logo" /></Link> 
          <div className='flex items-center gap-6 w-[170px] relative h-[38px] rounded-2xl cursor-pointer border-2'>
            <GoLocation className='mx-2' size={20} />
            <p  onClick={()=>setDropDown(!dropdown)} className='text-bold'>{text}</p> 
          </div>
          <div className={dropdown ? 'w-[170px] z-999 h-[75px] border-2 absolute left-32 top-10 rounded-2xl bg-slate-900 flex flex-col items-center justify-between pt-2 pb-2':'w-[170px] h-[75px] border-2 absolute left-32 top-[-300%] rounded-2xl bg-slate-500 flex flex-col items-center justify-between z-100 pt-2 pb-2'} >
             <p onClick={handleChange}   className='cursor-pointer hover:underline'>{newText}</p>
          </div>
          </div>
          <div className='flex gap-12'>
              <Link to='/login'><p style={{lineHeight:'32px'}} className='w-[170px] h-[38px] rounded-2xl cursor-pointer border-2 px-3'>LogIn / Register</p></Link>
               <GiHamburgerMenu onClick={()=> setNav(!nav)} className='cursor-pointer' size={30}/>
          </div>
        </div>
        {nav? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
          <div className={ nav ?  'fixed top-0 right-0 w-[300px] h-screen bg-slate-500 z-10 duration-300' : 'fixed top-0 right-[-100%] w-[300px] h-screen bg-slate-500 z-10 duration-300' }>
               <AiOutlineClose onClick={()=> setNav(!nav)} className='absolute right-3 top-6 cursor-pointer' size={25} />
               <div className='mt-24 p-5'>
                  <ul className='flex flex-col items-center justify-between gap-20'>
                     <Link to='/'><li onClick={()=>setNav(!nav)} className='cursor-pointer flex items-center gap-5'><span><AiFillHome size={25}/></span> Home</li></Link> 
                     <Link to='/categories'><li onClick={()=>setNav(!nav)} className='cursor-pointer flex items-center gap-5'> <span><TbCategory size={25}/> </span> Categories</li></Link>  
                     <Link to='/cart'><li onClick={()=>setNav(!nav)} className='cursor-pointer flex items-center gap-5'> <span><BsFillCartFill size={25}/></span>  Cart {productData.length} </li></Link> 
                      <Link to='/aboutme'><li onClick={()=>setNav(!nav)} className='cursor-pointer flex items-center gap-5'> <span><BsPeopleFill size={25}/></span>   About Us</li></Link> 
                  </ul>
               </div>
          </div>
        
         
        </>
    )

  
}

  

