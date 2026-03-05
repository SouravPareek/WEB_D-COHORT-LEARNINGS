import React from 'react'
import axios from 'axios'

const App = () => {
  const getData = async ()=>{
    const response = await axios.get('https://fakestoreapi.com/products')
    console.log(response);
    
  }
    return (
    <div className='h-screen w-screen bg-zinc-600 text-white text-2xl p-5'>
        <button className='rounded-2xl px-4 py-3 bg-red-500 active:scale-95' onClick={getData}>Get Data</button>
    </div>
  )
}

export default App