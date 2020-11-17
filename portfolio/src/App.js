import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Projects from "./projects.json";
import ProjectContext from "./utils/projectContext";
import Project from "../src/components/Project";
import Wrapper from "../src/components/Wrapper";
import Header from "../src/components/Header";
import Jumbotron from "../src/components/Jumbotron";
import Footer from "../src/components/Footer";
// import About from "./pages/About";
// import Contact from "./pages/Contact";


function App() {
    // useState hook
    const [projects, setProjects] = useState([]);

    // useEffect hook that sets employees array to be the array from employees.json when page mounts
    useEffect(() => {
        setProjects(Projects)
    }, []);

    return (
        <div>
            <Header></Header>
            <Jumbotron></Jumbotron>
            <Wrapper>
                <ProjectContext.Provider value={projects}>
                    <Project></Project>
                </ProjectContext.Provider>
            </Wrapper>
            <Footer></Footer>
        </div >
    );
}

export default App;