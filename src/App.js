import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Pricing from './components/Pricing/Pricing';
import Feature2 from './components/Feature2/Feature2'
const App = () => {
  return (
    <div className='bg-black'>
      <Header/>
      <Hero/>
      <Feature2/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default App
