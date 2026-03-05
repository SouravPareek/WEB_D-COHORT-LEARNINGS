import { useContext } from "react"
import { ThemeDataContext } from "../context/ThemeContext"

const Navbar = () => {
  const [Theme, setTheme] = useContext(ThemeDataContext)
    return (
    <div className="flex justify-between bg-amber-500 h-1/5 p-3 items-center">
        <h1>Navbar</h1>
        <p>{Theme}</p>
        <button onClick={()=>{
            if(Theme === 'light')
                setTheme('dark')
            else
                setTheme('light')
        }} className="rounded-2xl px-4 py-3 bg-green-700 active:scale-95 shadow-lg shadow-black">Change theme</button>
    </div>
  )
}

export default Navbar