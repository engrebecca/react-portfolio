import React, { useEffect, useState } from "react";
import Projects from "./projects.json";
import ProjectContext from "./utils/projectContext";
import Project from "../src/components/Project";


function App() {
    // useState hook
    const [projects, setProjects] = useState([]);

    // useEffect hook that sets employees array to be the array from employees.json when page mounts
    useEffect(() => {
        setProjects(Projects)
    }, []);

    return (
        <div>
            <ProjectContext.Provider value={projects}>
                <Project></Project>
            </ProjectContext.Provider>
        </div >
    );
}

export default App;