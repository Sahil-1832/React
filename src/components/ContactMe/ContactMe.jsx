import React from 'react'
import "./ContactMe.css"
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'

const ContactMe = () =>{
    return(
        <section className="contact-container" id="contactMe">
            <h5>Contact Me</h5>

            <div className="contact-content">
                <div>
                    <ContactInfoCard 
                        iconUrl="./assets/email.png"
                        text="Gmail"
                        url="mailto:sharmasahil1832@gmail.com"
                    />
                </div>
                <div>
                    <ContactInfoCard 
                        iconUrl="./assets/github2.png"
                        text="Git-Hub"
                        url="https://github.com/Sahil-1832"
                    />
                </div>
                <div>
                    <ContactInfoCard 
                        iconUrl="./assets/linkedin.png"
                        text="Linkedin"
                        url="https://www.linkedin.com/in/sahil-sharma-069635282"
                    />
                </div>
                <div>
                    <ContactInfoCard 
                        iconUrl="./assets/twitter.png"
                        text="X"
                        url="https://x.com/SahilSharma1832?t=0-7Un7SwkMpTxyq-K2f48g&s=09"
                    />
                </div>
            </div>
        </section>
    )
}

export default ContactMe;