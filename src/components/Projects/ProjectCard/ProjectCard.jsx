import React from "react"
import "./ProjectCard.css"

const ProjectCard = ({details}) =>{
    return (
        <div className="project-card">
            <h6>{details.title}</h6>
            <div className="technology">{details.technology}</div>

            <ul>
                {details.description.map((item)=>(
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ProjectCard;