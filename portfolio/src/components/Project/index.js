import React, { useContext } from "react";
import ProjectContext from "../../utils/projectContext";
import "./style.css";

function Project() {
    const projects = useContext(ProjectContext);

    // Returns a row for each employee in the employees array which can be updated based on a user set filter or sort
    return (
        <main className="container mt-5 mb-5 flex-shrink-0 content">
            <div className="row">
                <div className="col-md d-flex card border-0">
                    <div className="card-body mx-auto">
                        <div className="card-group">
                            <div className="card m-3 border-0">
                                <>{projects.map((project, i) => (
                                    <div classNameName="container" key={i}>
                                        <a href={project.deployLink} target="_blank"><img className="card-img-top border border-dark" src={project.image} alt={project.title} data-aos="fade-up" data-aos-delay="50" /></a>
                                        <h4 className="text-center m-4 cormorant-font sub-text">{project.title}</h4>
                                        <p className="cormorant-font text-center px-5">{project.description}</p>
                                        <span className="text-center mb-5">
                                            <a href={project.githubLink} className="text-center text-secondary m-2 cormorant-font" target="_blank">GitHub</a>
                                            <a href={project.deployLink} className="text-center text-secondary m-2 cormorant-font" target="_blank">See It Online</a>
                                        </span>
                                    </div>
                                ))
                                }</>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Project;