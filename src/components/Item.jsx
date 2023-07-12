import React ,{useState, useEffect} from 'react'
import CategoryListing from './CategoryListing'
import axios from 'axios'

export default function Item() {
  const [data , setData] = useState([])
  useEffect(()=>{
      axios.get('https://fakestoreapiserver.reactbd.com/products').then((res)=>{
          console.log(res)
          setData(res.data)
      }).catch((err)=>{
          console.log(err)
      })
  },[])
  return (
    
      <div className=' mx-[5%] py-10 grid grid-cols-4 gap-10'>
        {
            data.map((item)=>{
                return(
                    <CategoryListing key={item.id} product={item}/>
                )
            })
        }
    </div>
    
  )
}
