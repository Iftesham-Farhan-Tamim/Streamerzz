import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import HowitWorks from './components/HowitWorks'
import KeyFeatures from './components/KeyFeatures'
import PricingPlans from './components/PricingPlans'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='text-sm text-neutral-300 antialiased'>
      <Navbar />
      <HeroSection />
      <HowitWorks />
      <KeyFeatures />
      <PricingPlans />
      <Testimonial />
      <Footer />
    </main>
  )
}

export default App
