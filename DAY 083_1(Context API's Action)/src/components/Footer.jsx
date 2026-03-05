import { useContext } from "react"
import { ThemeDataContext } from "../context/ThemeContext"


const Footer = () => {
  const data = useContext(ThemeDataContext)
    return (
    <div className="flex justify-between h-1/5 bg-blue-400 p-3 items-center">
        <h1>Footer</h1>
        <p>{data}</p>
    </div>
  )
}

export default Footer