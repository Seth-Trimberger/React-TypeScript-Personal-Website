import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './Components/NavBar/Navbar'
import PersonalProjects from './Components/Persoanl Projects/PersonalProjects'
import MainPage from './Components/MainPage/MainPage'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MainPage></MainPage>
    </>
  )
}

export default App
