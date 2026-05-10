import { useEffect, useState } from 'react'
import '../styles/Responsive.css'

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
                        <span className="logo-icon">✨</span>
                        <span className="logo-text">Nova</span>
                    </div>
                    <ul className="nav-links">
                        <li><a href="#images">Images</a></li>
                        <li><a href="#apidescription">API Description</a></li>
                        <li><a href="#catdatails">Cat Datails</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
