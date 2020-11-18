import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
            <Header></Header>
            <Jumbotron></Jumbotron>
            <Wrapper>
                <Switch>
                    <Route path="/portfolio" exact>
                        <ProjectContext.Provider value={projects}>
                            <Project></Project>
                        </ProjectContext.Provider>
                    </Route>
                    <Route path={["/", "/about"]} exact>
                        <About></About>
                    </Route>
                    <Route path="/contact" exact>

                    </Route>
                </Switch>
            </Wrapper>
            <Footer></Footer>
        </Router>
    );
}

export default App;