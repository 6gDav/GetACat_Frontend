import catImage from '../assets/cat.png';

import "../styles/FooterStyle.css";

function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 w-full">
            <aside>
                <img src={catImage} alt="cat-image" className={"cat-image-footer"} />
                <p><a href="https://github.com/6gDav" target='_blank'>6gDav</a></p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover" href="https://github.com/6gDav/GetACat_Frontend" target='_blank'>Frontend Code</a>
                <a className="link link-hover" href="https://github.com/6gDav/GetACat_Backend" target='_blank'>Backend Code</a>
                <a href="#apidescription" target='_blank' title='A bit above'>Read Documention Here</a>
            </nav>
            <nav>
                <h6 className="footer-title">Programing Tools</h6>
                <a className="link link-hover" href="https://daisyui.com/?lang=en" target='_blank'>Design (DaisyUI)</a>
                <a className="link link-hover" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target='_blank'>Design (CSS)</a>
                <a className="link link-hover" href="https://react.dev/" target='_blank'>Framework (React)</a>
            </nav>
            <nav>
                <h6 className="footer-title">Licence</h6>
                <a className="link link-hover" href="https://opensource.org/license/mit">MIT (Licence)</a>
            </nav>
        </footer>
    )
}

export default Footer
