import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <Navbar />
   </div>
  )
}

export default App
