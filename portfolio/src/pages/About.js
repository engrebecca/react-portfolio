import React from "react";
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
// import { NavLink } from "react-router-dom";

function About() {
    return (
        <Container className="mb-3">
            <Row>
                <Col lg="6">
                    <img src="./headshot.jpg" className="img-fluid mt-5 rounded-circle" alt="Rebecca Eng headshot" data-aos="fade-down" data-aos-delay="50" />
                </Col>
                <Col lg="6">
                    <Card className="border-0">
                        <Container className="mt-5">
                            <h1 className="border-bottom cormorant-font sub-text text-center" data-aos="fade-down" data-aos-delay="50">Welcome</h1>
                        </Container>
                        <CardBody data-aos="fade-down" data-aos-delay="50">
                            <p className="card-text cormorant-font">
                            Rebecca Eng is a front end software engineer with a background in product management. Recognized for her ability to develop customer-centric products and plan strategic programs. She has skills in React, JavaScript, HTML, and CSS with strengths in problem solving and project management. She is passionate about solving user needs and using technology to create a positive social impact. She is positioned to combine web development skills with a background in product management to bring a unique perspective on creating products to better serve users. <br /><br /> View resume <a href="Eng Rebecca Online Resume.pdf" target="_blank" className="about-link underline">here</a> or reach me <a href="/contact" className="about-link underline">here</a> or at the below links.</p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
}

export default About;