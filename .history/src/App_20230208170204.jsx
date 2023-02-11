import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { AboutUs, Blog, CTA, Reasons, Services } from './components'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <Reasons />
      <CTA />
      <Blog />
   </div>
  )
}

export default App
