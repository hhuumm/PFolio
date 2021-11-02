import logo from "./logo.svg";
import "./App.css";
import { Card } from "react-bootstrap";
import { PortfolioList } from "./PortfolioList";
import { getPortfolioData } from "./PortfolioData";
import { url } from "inspector";
import emailjs from "emailjs-com";
import React, { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const portfolioData = getPortfolioData();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let data = {
      name: name,
      email: email,
      message: message,
    };

    console.log(data);

    emailjs
      .sendForm(
        "service_a9ssjx8",
        "template_52cbgy7",
        e.currentTarget,
        "user_tLF3B8hwwPaXlOiFzeL0m"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          setError(true);
        }
      );
    setSent(true);
  };

  return (
    <>
      <section id="intro" className="main style1 dark fullscreen">
        <div className="content">
          <header style={{ marginBottom: "50%" }}>
            <h2 style={{ marginTop: "30%" }}>Hamid Ebrahimi</h2>
            <strong>Software Developer</strong>
          </header>
          <footer></footer>
        </div>
      </section>

      <section
        id="one"
        className="main style2 right dark fullscreen"
        style={{ paddingTop: "12.5%", paddingBottom: "12.5%" }}
      >
        <div className="content box style2">
          <header>
            <h2>About Me</h2>
          </header>
          <p>
            A versatile software developer, with strong understanding of Data
            Structures and Big O Efficiency. Recent graduate of General Assembly’s 
            software immersion course, having completed multiple projects along the way.
            Very eager to help provide technical solutions.
            <br />
          </p>
        </div>
      </section>

      <section
        id="skills"
        className="main style1 fullscreen"
        style={{ paddingTop: "20%", paddingBottom: "15%" }}
      >
        <div className="content">
          <header>
            <h2>Skills</h2>
          </header>
          <div style={{ marginLeft: "5%" }}>
            <table>
              <tr>
                <td>
                  <i
                    className="fab fa-react fa-2x"
                    style={{ display: "inline-block" }}
                  >
                    <label style={{ fontSize: "small" }}>React</label>
                  </i>
                  <i
                    className="fab fa-html5 fa-2x"
                    style={{ display: "inline-block" }}
                  >
                    {" "}
                    <label style={{ fontSize: "small" }}>HTML</label>
                  </i>
                  <i
                    className="fab fa-js-square fa-3x"
                    style={{ display: "inline-block" }}
                  >
                    <label></label>
                  </i>
                  <i
                    className="fab fa-node fa-3x"
                    style={{ display: "inline-block" }}
                  ></i>
                  <i
                    className="fab fa-microsoft fa-2x"
                    style={{ display: "inline-block" }}
                  >
                    <label style={{ fontSize: "small" }}>ASP NET</label>
                  </i>
                </td>
              </tr>

              <tr>
                <i
                  className="fas fa-database fa-3x"
                  style={{ display: "inline-block" }}
                >
                  <label style={{ fontSize: "small" }}>Mongo</label>
                </i>
                <i
                  className="fas fa-database fa-3x"
                  style={{ display: "inline-block" }}
                >
                  <label style={{ fontSize: "small" }}>POSTGRES</label>
                </i>
                <i
                  className="fas fa-database fa-3x"
                  style={{ display: "inline-block" }}
                >
                  <label style={{ fontSize: "small" }}>FIREBASE</label>
                </i>
                <i
                  className="fas fa-database fa-3x"
                  style={{ display: "inline-block" }}
                >
                  <label style={{ fontSize: "small" }}>SQL</label>
                </i>
              </tr>

              <tr>
                <i
                  className="fas fa-server fa-2x"
                  style={{ display: "inline-block" }}
                >
                  <label style={{ fontSize: "x-small" }}>Azure</label>
                </i>
                <i
                  className="fas fa-server fa-2x"
                  style={{ display: "inline-block" }}
                >
                  <label style={{ fontSize: "x-small" }}>AWS</label>
                </i>
                <i
                  className="fas fa-server fa-2x"
                  style={{ display: "inline-block" }}
                >
                  <label style={{ fontSize: "x-small" }}>Heroku</label>
                </i>
                <i
                  className="fas fa-server fa-2x"
                  style={{ display: "inline-block" }}
                >
                  <label style={{ fontSize: "x-small" }}>Netlify</label>
                </i>
              </tr>

              <tr>
                <i
                  className="fab fa-windows fa-2x"
                  style={{ display: "inline-block" }}
                >
                  <label style={{ fontSize: "x-small" }}>Windows</label>
                </i>
                <i
                  className="fab fa-linux fa-2x"
                  style={{ display: "inline-block" }}
                >
                  <label style={{ fontSize: "x-small" }}>Linux</label>
                </i>
              </tr>

              <tr>
                <i
                  className="fab fa-apple fa-lg"
                  style={{ display: "inline-block" }}
                >
                  <label style={{ fontSize: "x-small" }}>Mac</label>
                </i>
              </tr>
            </table>
          </div>
        </div>
      </section>
      <section
        id="gallery"
        className="main style3 primary"
        style={{ marginTop: "0" }}
      >
        <div className="content">
          <header>
            <h2>Projects</h2>
          </header>
          <div className="gallery">
            {portfolioData.map((project, index) => {
              let indx = (index + 1) % 2;
              if (indx === 0) {
                return (
                  <article className="from-right">
                    <a
                      href={project.projectUrl}
                      className="image fit"
                      onMouseOver={(e) => {
                        e.currentTarget.style.opacity = "100%";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = "70%";
                      }}
                      style={{
                        height: "100%",
                        textDecoration: "none",
                        width: "100%",
                        color: project.fontColor,
                        backgroundImage: `url(${project.iconPhotoURL.toString()})`,
                        opacity: "70%",
                      }}
                    >
                      <h2 style={{ padding: "25% 0" }}>
                        {project.projectName}
                      </h2>
                    </a>
                  </article>
                );
              } else {
                return (
                  <article className="from-left">
                    <a
                      href={project.projectUrl}
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
                        color: project.fontColor,
                        padding: "25% 0",
                        backgroundImage: `url(${project.iconPhotoURL.toString()})`,
                        opacity: "70%",
                      }}
                    >
                      <h2>{project.projectName}</h2>
                    </a>
                  </article>
                );
              }
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="main style3 secondary">
        <div className="content">
          {!sent ? (
            <>
              <header>
                <h2>Email</h2>
                <p>For business inqueries, please fill out the form below.</p>
              </header>
              <div className="box">
                <form onSubmit={sendEmail}>
                  <div className="fields">
                    <div className="field half">
                      <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="field half">
                      <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="field">
                      <textarea
                        name="message"
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Message"
                        rows={6}
                      ></textarea>
                    </div>
                  </div>
                  <ul className="actions special">
                    <li>
                      <input type="submit" value="Send Message" />
                    </li>
                  </ul>
                </form>
              </div>
            </>
          ) : (
            <>
              {error ? (
                <header>
                  <h2 style={{ color: "#ff0033", opacity: "75%" }}>
                    Something Went Wrong
                  </h2>
                </header>
              ) : (
                <header>
                  <h3 style={{ color: "#71C562", opacity: "75%" }}>
                    Your Message Has Been Sent, Thank You for Your Time
                  </h3>
                </header>
              )}
            </>
          )}
        </div>
      </section>

      <footer id="footer" style={{ display: "flex", justifyContent: "center" }}>
        <ul className="icons">
          <li>
            <a
              style={{}}
              href="https://www.linkedin.com/in/hesolutions/"
              className="icon brands fa-linkedin-in fa-2x"
            >
              <span className="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              style={{}}
              href="https://github.com/hhuumm"
              className="icon brands fa-github fa-2x"
            >
              <span className="label">Dribbble</span>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
