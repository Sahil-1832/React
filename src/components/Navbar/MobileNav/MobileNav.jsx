import React from 'react'
import "./MobileNav.css"

const url = "http://localhost:5173/Sahil_Resume.pdf";


const MobileNav = ({isOpen,toggleMenu}) =>{

    const downloadFireAtURL = (url) => {
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download','pdf');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

    return(
        <>
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} 
        onClick={toggleMenu}>
            <div className="mobile-menu-container">
                <img src="./assets/new.png" alt="Nothing" className="logo" />
                <ul>
                    <li>
                        <a href="#hero" className="menu-item">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="menu-item">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="menu-item">Skills</a>
                    </li>
                    <li>
                        <a href="#projects" className="menu-item">Projects</a>
                    </li>
                    <li>
                        <a href="#contactMe" className="menu-item">Contact Me</a>
                    </li>
                    <button className="contact-btn" onClick={()=>{downloadFireAtURL(url)}}>
                        Hire Me
                    </button>
                </ul>
            </div>
        </div>
        </>
    )
}

export default MobileNav;