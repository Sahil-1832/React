import React from 'react'
import "./ContactInfoCard.css"

const ContactInfoCard = ({iconUrl,text,url}) =>{

    const handleDivClick = () => {
        window.open(url, '_blank');
    };
    
    return(
        <div className="contact-details-card">
            <div className="icon">
                <img onClick={handleDivClick} src={iconUrl} alt={text} />
            </div>
            <p>{text}</p>
        </div>
    )
}

export default ContactInfoCard;