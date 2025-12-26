import React from 'react'

const Cards = (props) => {
  return (
    <div className='bg-cyan-400 border-none font-bold text-xl flex justify-center items-center w-200 h-50 px-10 py-20 rounded-2xl mx-10 text-white my-20'>
        Hi!, This is {props.user}, I am {props.age} years old.
    </div>
  )
}

export default Cards