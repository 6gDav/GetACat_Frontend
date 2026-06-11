import { useEffect, useState } from 'react'

import catImage from '../../assets/cat.png'

import './Header.css'
import '../../styles/Responsive.css'

function Header() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div>
            <header className={`responsive-header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="header-background"></div>
                <nav className="nav-container">
                    <div className="header-logo">
                        <span className="logo-icon"></span>
                        <span className="logo-text" onClick={() => window.location.reload()}>GetACat</span>
                    </div>
                    <ul className="nav-links">
                        <li><a href="#images">Images</a></li>
                        <li><a href="#catdatails">Cat Datails</a></li>
                        <li><a href="#apidescription">API</a></li>
                    </ul>
                </nav>
                <div id='cat-image-header-container'>
                    <img src={catImage} alt="cat-image" className={`cat-image-header ${isScrolled ? 'scrolled' : ''}`} />
                </div>
            </header>
        </div>
    )
}

export default Header
