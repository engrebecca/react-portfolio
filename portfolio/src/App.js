import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Projects from "./projects.json";
import ProjectContext from "./utils/projectContext";
import Project from "../src/components/Project";
import Wrapper from "../src/components/Wrapper";
import Header from "../src/components/Header";
import Jumbotron from "../src/components/Jumbotron";
import Footer from "../src/components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
    // useState hook
    const [projects, setProjects] = useState([]);

    // useEffect hook that sets employees array to be the array from employees.json when page mounts
    useEffect(() => {
        setProjects(Projects)
    }, []);

    return (
        <Router>
            <Header />
            <Jumbotron />
            <Wrapper>
                <Switch>
                    <Route path="/portfolio" exact>
                        <ProjectContext.Provider value={projects}>
                            <Project />
                        </ProjectContext.Provider>
                    </Route>
                    <Route path="/" exact>
                        <About />
                    </Route>
                    <Route path="/contact" exact>
                        <Contact />
                    </Route>
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </Wrapper>
            <Footer />
        </Router>
    );
}

export default App;