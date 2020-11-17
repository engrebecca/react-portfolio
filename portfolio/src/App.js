import React, { useEffect, useState } from "react";
import Projects from "./projects.json";

function App() {
    // useState hook
    const [projects, setProjects] = useState([]);

    // useEffect hook that sets employees array to be the array from employees.json when page mounts
    useEffect(() => {
        setProjects(Projects)
    }, []);

    return (
        <div>
            <p>Hello</p>
        </div >
    );
}

export default App;