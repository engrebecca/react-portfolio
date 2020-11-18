import React from "react";
import { NavLink } from "react-router-dom";

function About() {
    return (<main className="flex-shrink-0 content">
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-sm">
                    <img src="./headshot.jpg" className="img-fluid" alt="Rebecca Eng headshot" data-aos="fade-down"
                        data-aos-delay="50" />
                </div>
                <div className="col-sm d-flex">
                    <div className="card p-3 border-0" style={{ width: "40rem" }}>
                        <div className="container">
                            <h1 className="border-bottom cormorant-font header-text text-center" data-aos="fade-down"
                                data-aos-delay="50">Welcome</h1>
                        </div>
                        <div className="card-body" data-aos="fade-down" data-aos-delay="50">
                            <p className="card-text cormorant-font">
                                Hi there! My name is Rebecca Eng. I'm a full stack
                                software engineer
                                based in San Francisco, California. <br /> <br /> I'm pursuing a certification in full stack
                                    web development from UC Berkeley Extension. I have skills in HTML, CSS , JavaScript, and
                                Python with strengths in problem solving and project management. <br /> <br /> I'm
                                        passionate about solving user needs and using technology to create a positive social
                                        impact. I’m excited to combine my web development skills with my background in product
                                        management to bring a unique perspective on creating products to better serve users.
                                <br /><br /> If you are a business seeking to build web presence or an employer looking to
                                hire, you can view my <a href="Eng Rebecca Resume_11.7.20.pdf" target="_blank"
                                    className="text-body underline">resume</a> and reach me <a href="/contact"
                                        className="text-body underline">here</a> or at the below links.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}

export default About;