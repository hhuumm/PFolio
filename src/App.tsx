import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card } from "react-bootstrap";
import { PortfolioList } from "./PortfolioList";
import { getPortfolioData } from "./PortfolioData";

function App() {
  const portfolioData = getPortfolioData();
  

  return (
    <>
      <nav className="App-header" style={{ border: "" }}>
        <div style={{ border: "", animation: "fadeIn" ,animationDuration:"3s", textAlign:"center" }} >
        <p>Hamid Ebrahimi</p>
        <p>Software Engineer</p>
        <p>(646) 417 0037</p>
        <p>H4midEbr4himi@gmail.com</p>
        </div>
      </nav>

      <div className="App" id="1" style={{animation: "fadeIn" ,animationDuration:"1s", animationPlayState:"paused"}} onClick={(e)=>{e.currentTarget.style.animationPlayState="running"}}>
        <div className="App-header" >Projects</div>
      </div>
      <PortfolioList data={portfolioData} />
      <div className="App-header">
        <a href="https://github.com/hhuumm">
          <i className="fa fa-github" style={{ fontSize: "50px" }}></i>
        </a>
      </div>
    </>
  );
}

export default App;
