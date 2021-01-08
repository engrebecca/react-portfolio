import React from "react";

function Contact() {
    return (
        <main className="flex-shrink-0 content" data-aos="fade-down" data-aos-delay="50">
            {/* Let's get in touch sub title */}
            <div className="col-sm d-flex">
                <div className="card p-3 border-0" style={{ width: "40rem" }}>
                    <div className="container">
                        <h1 className="border-bottom cormorant-font sub-text text-center" data-aos="fade-down"
                            data-aos-delay="50">Let's get in touch!</h1>
                    </div>
                    {/* <div className="card-body text-center" data-aos="fade-down" data-aos-delay="50">
                        <p className="card-text cormorant-font">
                            Interested in doing a project together? <br /> Want to learn more about my work? <br /> <br /> I can be reached at the below email or phone number. <br /> Let's connect on LinkedIn and GitHub. </p>
                    </div> */}
                </div>
            </div>
            <div className="container mt-5 mb-5 text-center">
                <div className="row">
                    <div className="col-sm" >
                        {/* Email */}
                        <div className="card border-0" style={{ width: "12rem" }}>
                            <div className="card-body">
                                <a href="mailto:reng412@gmail.com" className="text-body"><i className="far fa-envelope fa-5x"></i></a>
                                <p className="card-text cormorant-font">reng412@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    {/* Resume */}
                    <div className="col-sm" >
                        <div className="card border-0" style={{ width: "12rem" }}>
                            <div className="card-body">
                                <a href="Eng Rebecca Resume Stylized.pdf" target="_blank" rel="noreferrer" className="text-body">
                                    <i className="far fa-file fa-5x"></i></a>
                                <p className="card-text cormorant-font">Resume</p>
                            </div>
                        </div>
                    </div>
                    {/* LinkedIn */}
                    <div className="col-sm" >
                        <div className="card border-0" style={{ width: "12rem" }}>
                            <div className="card-body">
                                <a href="https://www.linkedin.com/in/engrebecca/" target="_blank" rel="noreferrer" className="text-body"><i
                                    className="fab fa-linkedin fa-5x"></i></a>
                                <p className="card-text cormorant-font">LinkedIn</p>
                            </div>
                        </div>
                    </div>
                    {/* GitHub */}
                    <div className="col-sm" >
                        <div className="card border-0" style={{ width: "12rem" }}>
                            <div className="card-body">
                                <a href="https://github.com/engrebecca" target="_blank" rel="noreferrer" className="text-body"><i
                                    className="fab fa-github fa-5x"></i></a>
                                <p className="card-text cormorant-font">GitHub</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Contact;