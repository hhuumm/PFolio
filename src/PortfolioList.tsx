import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { PortfolioData } from "./PortfolioData";

interface Props {
  data: PortfolioData[];
}

export const PortfolioList = ({ data }: Props) => (
  <div
    style={{
      border: "solid #282c34",
      backgroundColor: "#282c34",
      backgroundBlendMode: "overlay",
    }}
  >
    {data.map((piece) => (
      <div
        className="App-Header"
        style={{ border: "none", width: "100%", marginBottom: "60%" }}
      >
        <Card
          text="white"
          style={{
            width: "800px",
            margin: "0 auto",
            backgroundColor: "#282c34",
            border:"solid white",
            padding:"22px"
          }}
        >
          <Card.Header
            style={{
              textAlign: "center",
              border: "none",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >
            <a href={piece.projectUrl}> {piece.projectName}</a>
          </Card.Header>

          <Card.Subtitle style={{ border: "none", marginTop: "0px" }}>
            {piece.description}
          </Card.Subtitle>
          <div
            className="Tech"
            style={{
              border: "none",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            {piece.projectTechnologies.map((tech) => {
              return (
                <div
                  className={tech}
                  style={{ border: "solid", width: "1fr", margin: "0 auto" }}
                >
                  {tech}
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    ))}
  </div>
);
