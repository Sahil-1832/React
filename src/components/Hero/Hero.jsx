import React from 'react'
import './Hero.css'

const Hero = () =>{
    return (
        <section className="hero-container" id="hero">
            <div className="hero-content">
                <h2>Hello there, I'm<br></br> &lt; Sahil /&gt;</h2>
                <p className="para">
                    A passionate individual with a love for creativity, problem-solving, and continuous learning.
                    I am excited to connect, collaborate, and explore new opportunities that allow me to make 
                    a positive impact and grow both personally and professionally. Let's embark on this journey together...
                </p>
            </div>
            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        <img src="./assets/react.png" alt="" />
                    </div>
                    <img src="./assets/portfolio3.png" alt="" />
                </div>
                <div>
                <div className="tech-icon">
                    <img src="./assets/html.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/css-3.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/js.png" alt="" />
                </div>
                </div>
            </div>
        </section>
    )
}

export default Hero