import React from "react";
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
// import { NavLink } from "react-router-dom";

function About() {
    return (
        <Container className="mb-3">
            <Row>
                <Col lg="6">
                    <img src="./headshot.jpg" className="img-fluid mt-5" alt="Rebecca Eng headshot" data-aos="fade-down" data-aos-delay="50" />
                </Col>
                <Col lg="6">
                    <Card className="border-0">
                        <Container className="mt-5">
                            <h1 className="border-bottom cormorant-font sub-text text-center" data-aos="fade-down" data-aos-delay="50">Welcome</h1>
                        </Container>
                        <CardBody data-aos="fade-down" data-aos-delay="50">
                            <p className="card-text cormorant-font">
                                Hi there! My name is Rebecca Eng. I'm a full stack software engineer based in San Francisco, California. <br /> <br /> I have a B.A in International Business and Spanish with a certificate in Full Stack Web Development from UC Berkeley Extension. I have skills in HTML, CSS , JavaScript, and Python with strengths in problem solving and project management. <br /> <br /> I'm passionate about solving user needs and using technology to create a positive social impact. I’m excited to combine my web development skills with my background in product management to bring a unique perspective on creating products to better serve users. <br /><br /> If you are a business seeking to build web presence or an employer looking to hire, you can view my <a href="Eng Rebecca Resume.pdf" target="_blank" className="text-body underline">resume</a> and reach me <a href="/contact" className="text-body underline">here</a> or at the below links.</p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
}

export default About;