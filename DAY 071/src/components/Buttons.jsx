import React from 'react'

const Buttons = props => {
  return (
    <div className='bg-emerald-500 text-white text-center text-xl w-250 h-fit px-5 py-5 rounded-2xl mx-10 my-20 flex justify-center items-center'>
        {props.text}
    </div>
  )
}

export default Buttons