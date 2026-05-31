import { useEffect, useState } from 'react'
import axios from 'axios'

import Header from './Components/Header'
import CaroselUI from './Components/CaroselUI'
import APIDescription from './Components/APIDescription'
import CatDatails from './Components/CatDatails'
import VerticalScrollIndicator from './Components/ScrollIndicator'

import './styles/App.css'

function App() {
  const [res, setRes] = useState([])
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)

  useEffect(() => {
    axios.get("http://localhost:3001/get-a-cat-image")
      .then(r => setRes(r.data))
      .catch(err => console.error(err))

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {isDesktop && <VerticalScrollIndicator />}

      <Header />
      <main className="main-content">
        <section id='images'>
          <CaroselUI res={res} />
        </section>
        <section id='catdatails'>
          <CatDatails />
        </section>
        <section id='apidescription'>
          <APIDescription />
        </section>

      </main>
    </>
  )
}

export default App