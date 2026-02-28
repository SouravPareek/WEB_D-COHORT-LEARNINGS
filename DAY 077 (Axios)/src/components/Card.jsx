import React from 'react'

const Card = ({elem}) => {
    const clr1 = Math.floor(Math.random()*256)
    const clr2 = Math.floor(Math.random()*256)
    const clr3 = Math.floor(Math.random()*256)

    return (
        <div style={{backgroundColor:`rgb(${clr1},${clr2},${clr3})`}} className='text-white w-75 h-75 rounded-[10px] m-5 p-5'>
            <h1>{elem.username}</h1>
            <h2>{elem.name}</h2>
            <h2>{elem.email}</h2>
        </div>
  )
}

export default Card