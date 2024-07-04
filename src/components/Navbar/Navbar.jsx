import React, { useState } from 'react';
import "./Navbar.css";
import "material-symbols";
import MobileNav from './MobileNav/MobileNav';
const url = "http://localhost:5173/Sahil_Resume.pdf";

const Navbar = () =>{

    const [openMenu,setOpenMenu] = useState(false);
    const toggleMenu = () =>{
        setOpenMenu(!openMenu);
    };

    const downloadFireAtURL = (url) => {
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute('download',fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    };
    return(
        <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
           <nav className="nav-wrapper">
            <div className="nav-content">
                <img className="logo" src='./assets/new.png' alt="Nothing" />
                <ul className="nav-list">
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

                    <button className="contact-btn" onClick={()=>{downloadFireAtURL(url)}}>Hire me</button>
                </ul>

                <button class="menu-btn" onClick={toggleMenu}>
                    <span   
                        class={"material-symbols-outlined"}
                        style={{fontSize:"1.8rem"}}
                    >
                        {openMenu ? "close" : "menu"}
                    </span>
                </button>
            </div>
           </nav>
        </>
    );
}

export default Navbar;