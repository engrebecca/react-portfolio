import React, { useContext } from "react";
import ProjectContext from "../../utils/projectContext";
import "./style.css";

function Project() {
    const projects = useContext(ProjectContext);

    // Returns a row for each employee in the employees array which can be updated based on a user set filter or sort
    return (<>
        {projects.map((project, i) => (
            <div className="container" key={i}>
                <a href={project.deployLink} target="_blank"><img class="card-img-top border border-dark" src={project.image} alt={project.title} data-aos="fade-up" data-aos-delay="50" /></a>
                <h4 class="text-center m-4 cormorant-font sub-text">{project.title}</h4>
                <p class="cormorant-font text-center px-5">{project.description}</p>
                <span class="text-center mb-5">
                    <a href={project.githubLink} class="text-center text-secondary m-2 cormorant-font" target="_blank">GitHub</a>
                    <a href={project.deployLink} class="text-center text-secondary m-2 cormorant-font" target="_blank">See It Online</a>
                </span>
            </div>
        ))
        }</>
    );
}

export default Project;