import React from "react";

function Contact() {
    return (
        <main className="flex-shrink-0 content">
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col d-flex">
                        <div className="card p-3" style="width: 40rem;" data-aos="fade-down" data-aos-delay="50">
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label for="form-name" className="cormorant-font">Name</label>
                                        <input type="text" className="form-control cormorant-font" id="form-name"
                                            placeholder="Name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="form-email" className="cormorant-font">Email address</label>
                                        <input type="email" className="form-control cormorant-font" id="form-email"
                                            placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="form-message" className="cormorant-font">Message</label>
                                        <textarea className="form-control cormorant-font" id="form-message" rows="3"
                                            placeholder="Message"></textarea>
                                    </div>
                                    <button type="submit"
                                        className="btn btn-primary btn-secondary cormorant-font">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Contact;