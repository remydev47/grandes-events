import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <Navbar />
      <Hero />
      <Services />
   </div>
  )
}

export default App
