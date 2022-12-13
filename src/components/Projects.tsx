import { getPortfolioData } from "../PortfolioData";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useParams,
  } from "react-router-dom";
import { useEffect } from "react";

function Projects () {
    const params= useParams();
    console.log(params);
    const Id = params.id;
    const data = getPortfolioData();
    const project =  data.find((project) => project.id === Number(Id));
    
    useEffect(() => {
    //scroll to top of page
    window.scrollTo(0, 0);
    }, [Id] );
   
return (<>
    <section id="intro" className="main style1 dark fullscreen">
        <div className="content">
          <header style={{ marginBottom: "50%" }}>
        <a
        href={project?.projectUrl}
        className="image fit"
        title=""
        onMouseOver={(e) => {
          e.currentTarget.style.opacity = "100%";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "70%";
        }}
        style={{
          height: "100%",
          width: "100%",
          textDecoration: "none",
          color: project?.fontColor,
          padding: "25% 0",
          backgroundImage: `url(${project?.iconPhotoURL.toString()})`,
          opacity: "70%",
        }}
      >
        <h2>{project?.projectName}</h2>
        </a>
        <p>{project?.description}</p>
        {project?.guestUsername && (
        <>
        <ul>
        <li> Username: {project?.guestUsername}</li>
        <li> Password: {project?.guestPassword}</li>
        </ul>
        </>)}
        
      
        
        <p>Project Technologies
        <ul>{project?.projectTechnologies.map((tech)=><li>{tech}</li>)}</ul></p>
          </header>
          <footer></footer>
        </div>
      </section>
    <div>

    </div>
<section id="intro" className="main style1 dark fullscreen">
        <div className="content">
          <header style={{ marginBottom: "50%" }}>
         
          </header>
          <footer></footer>
        </div>
      </section>
    <div>

    </div>
</>)

  }



  export default Projects;