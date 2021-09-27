import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { PortfolioData } from "./PortfolioData";

interface Props {
  data: PortfolioData[];
}

export const PortfolioList = ({ data }: Props) => (
  <div style={{ border: "none" }}>
    {data.map((piece) => (
      <Card
        text="white"
        style={{
          border: "none",
          marginTop: "10%",
          marginBottom: "20%",
          backgroundColor: "rgb(40,44,52)",
        }}
      >
        <Card.Header style={{ textAlign: "center", border: "none" }}>
          <a href={piece.projectUrl}> {piece.projectName}</a>
        </Card.Header>

        <Card.Subtitle style={{ border: "none" }}>
          {piece.description}
        </Card.Subtitle>
        <div className="Tech" style={{ border: "none" }}>
          {piece.projectTechnologies.map((tech) => {
            return (
              <div className={tech} style={{ border: "none" }}>
                {tech}
              </div>
            );
          })}
        </div>
      </Card>
    ))}
  </div>
);
