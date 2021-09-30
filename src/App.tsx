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
        <p>Hamid Ebrahimi</p>
        <p>Software Developer</p>
      
      </nav>

      <div className="App">
      <div className="App-header">Projects</div>
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
