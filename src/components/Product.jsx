import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductListing from './ProductListing'
import { useDispatch } from 'react-redux'
import addInfo from '../redux/ProductSlice'

export default function Product() {
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get('https://fakestoreapiserver.reactbd.com/products').then((res) => {
            console.log(res)
            setData(res.data)
            dispatch(addInfo(res.data))
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div className='w-full'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-2xl bg-black text-white py-2 w-[455px] text-center'>Eat Delicious Food</h1>
                <span className='w-20 h-[3px] bg-black'></span>
                <p className='max-w-[700px] text-gray-600 text-center'>At Khanpin you will experience food like never before. From the authentic Nepali cusine to International one , we are delighted to serve you with love.</p>
            </div>
            <div className=' mx-[5%] py-10 grid grid-cols-4 gap-10'>
                {
                    data.map((item, item_id) => {
                        return (
                            <ProductListing key={item_id} product={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}
