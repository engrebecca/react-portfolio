import React, { useContext } from "react";
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import ProjectContext from "../../utils/projectContext";

function Project() {
    const projects = useContext(ProjectContext);

    // Returns a card for each project in the projects array
    return (
        <Container>
            <Row>
                <Col>
                    <Card className="border-0">
                        <CardBody>
                            <>{projects.map((project, i) => (
                                <div className="container text-center project mb-5" key={i}>
                                    <a href={project.deployLink} target="_blank" rel="noreferrer"><img className="card-img-top border border-dark" src={project.image} alt={project.title} data-aos="fade-up" data-aos-delay="50" /></a>
                                    <h4 className="text-center m-4 cormorant-font sub-text">{project.title}</h4>
                                    <p className="cormorant-font text-center px-5">{project.description}</p>
                                    <span>
                                        <a href={project.githubLink} className="text-secondary cormorant-font m-3" target="_blank" rel="noreferrer">GitHub</a>
                                        <a href={project.deployLink} className="text-secondary cormorant-font m-3" target="_blank" rel="noreferrer">See It Online</a>
                                    </span>
                                </div>
                            ))
                            }</>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Project;