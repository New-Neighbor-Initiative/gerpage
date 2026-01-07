import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { fetch } from './api/api'
import './App.css'
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import About from "./components/About"
import Team from "./components/Team"
import Contact from "./components/Contact"

function App() {
  const [count, setCount] = useState(0)
  const [about, setAbout] = useState<string>('Loading...')

  // Example of fetching local JSON data
  useEffect(() => {
    fetch('/data/about_us.json')
      .then(res => res.json())
      .then(data => setAbout(data.description || JSON.stringify(data)))
      .catch(() => setAbout('Failed to load'))
  }, [])

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Team />
      <Contact />
    </>
  )
}

export default App
