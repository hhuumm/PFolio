import { getPortfolioData } from "../PortfolioData";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useParams,
  } from "react-router-dom";

function Projects () {
    const params= useParams();
    console.log(params);
    const Id = params.id;
    const data = getPortfolioData();
    const project = data.find((project) => project.id === Number(Id));
    project? console.log(project.projectTechnologies): console.log("no project found");
return (<>

    <div>
        <h1>{Id}</h1>
        <h1>{project?.projectName}</h1>
        <p>{project?.description}</p>
        <p>{project?.projectUrl}</p>
        <p>Project Technologies
        <ul>{project?.projectTechnologies.map((tech)=><li>{tech}</li>)}</ul></p>
    </div>
</>)

  }



  export default Projects;