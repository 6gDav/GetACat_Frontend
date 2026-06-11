import { useEffect, useState } from 'react'
import axios from 'axios'

import Header from './Components/Header/Header'
import Carosel from './Components/ImageCarosel/Carosel'
import APIDescription from './Components/APIDescription/APIDescription'
import CatDatails from './Components/CatDatails/CatDatails'
import VerticalScrollIndicator from './Components/ScrollIndicator/ScrollIndicator'
import Footer from './Components/Footer/Footer'

import './styles/App.css'

const CACHE_KEY = "cached_cat_images";

function App() {
  const [res, setRes] = useState(() => {
    const saved = sessionStorage.getItem(CACHE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    if (res.length > 0) return;

    axios.get("https://getacat-backend.onrender.com/get-a-cat-image")
      .then(r => {
        setRes(r.data);
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(r.data));
      })
      .catch(err => console.error(err));
  }, [res]);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isDesktop && <VerticalScrollIndicator />}

      <Header />
      <main className="main-content">
        <section id='images'>
          <Carosel res={res} />
        </section>
        <hr />
        <section id='catdatails'>
          <CatDatails />
        </section>
        <hr />
        <section id='apidescription'>
          <APIDescription />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App