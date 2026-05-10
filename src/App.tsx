import { useEffect, useState } from 'react'
import axios from 'axios'

import './styles/App.css'

import Header from './Components/Header'
import CaroselUI from './Components/CaroselUI'
import APIDescription from './Components/APIDescription'
import CatDatails from './Components/CatDatails'

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


function App() {
  const [count, setCount] = useState<number>(0)
  const [res, setRes] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/get-a-cat-image")
      .then(r => setRes(r.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <Header />
      <section id='images'>
        <CaroselUI res={res} />
      </section>
      <section id='apidescription'>
        <APIDescription />
      </section>
      <section id='catdatails'>
        <CatDatails />
      </section>
    </>
  )
}

export default App
