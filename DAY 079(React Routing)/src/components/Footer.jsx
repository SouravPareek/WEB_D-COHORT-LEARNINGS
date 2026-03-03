import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
    return (
    <div className='absolute p-[30px] items-center w-full h-1/6 bottom-0 left-0 bg-gray-600 flex justify-between'>
        <button onClick={()=>{
            navigate('/product')
        }} className='py-[10px] px-[20px] transition-all duration-300 ease-linear bg-emerald-500 rounded-2xl text-white active:scale-95'>Explore More</button>
        <p>&copy;2026 Sourav Pareek. All Rights Reserved..</p>
        <h2 className='text-4xl text-white'>Footer</h2>
    </div>
  )
}

export default Footer