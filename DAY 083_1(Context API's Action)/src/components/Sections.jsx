
import { useContext } from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import { ThemeDataContext } from '../context/ThemeContext'

const Sections = () => {
  const data = useContext(ThemeDataContext)
    return (
    <div className='flex h-3/5 bg-red-500 justify-between p-3 items-center'>
        <Section1/>
        <p>{data}</p>
        <Section2/>
    </div>
  )
}

export default Sections