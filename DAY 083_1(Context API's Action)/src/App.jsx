import Navbar from './components/Navbar'
import Sections from './components/Sections'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='text-3xl h-screen w-screen text-center text-white'>
        <Navbar/>
        <Sections/>
        <Footer/>
    </div>
  )
}

export default App