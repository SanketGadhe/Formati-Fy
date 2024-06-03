import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Start from './Components/Start'
import Landing from './Components/Landing'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  const [start, setstart] = useState(true)
  setTimeout(() => {
      setstart(false)
  }, 3000);
  return start?<Start/>:(
    <div className='bg-[#000] h-auto'>
   <>
    <Navbar/>
    
    <Outlet/>
    {/* <Formula/> */}
    </>
    </div>
  )
}

export default App
