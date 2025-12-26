import Cards from './components/Cards'
import Buttons from './components/Buttons'
const App = () => {
  return (
    <div className='bg-black w-screen h-screen px-10 py-1 flex' >
        <Cards user='Sourav' age={21} />
        <Cards user='RohanD' age={22} />
        <Cards user='Tanishk' age={20} />
        <Buttons text = 'Buy Now'/>
        <Buttons text = 'Learn More'/>
        <Buttons text = 'See through'/>
    </div>
  )
}

export default App