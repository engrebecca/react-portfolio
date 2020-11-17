import React from "react";

const ProjectContext = React.createContext({
    id: "",
    title: "",
    description: "",
    deployLink: "",
    githubLink: "",
    image: ""
});

export default ProjectContext;
