import { Activity, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { fetch } from './api/api'
import './App.css'

import Navbar from "./components/NavBar";
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About'
import Activities from './components/Activities'

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
      <Navbar />
      <Home />
      <Activities />
      <About />
      <Contact />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1>About Us</h1>
      <p>{about}</p>
    </>
  )
}

export default App
