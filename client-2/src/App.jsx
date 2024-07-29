import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'
import Gettouch from './components/Gettouch'
import PracticeAreas from './components/PracticeAreas'
import Attorneys from './components/Attorneys'
import Footer from './components/footer'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import DashBoard from "./components/DashBoard";

const router = createBrowserRouter([
  {
    path:"/",
    element : <>
    <Navbar/>
    <Landing/>
    <About/>
    <PracticeAreas/>
    <Attorneys/>
    <Footer/>
   </>
  },{
    path:"/about",
    element : <>
    <Navbar/>
    <PracticeAreas/>
    <Gettouch/>
    <Attorneys/>
    <Footer/>
   </>
  },,
  {
    path : "/dashboard",
    element: <DashBoard />
  }
])
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
