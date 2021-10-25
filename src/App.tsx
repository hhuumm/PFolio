import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card } from "react-bootstrap";
import { PortfolioList } from "./PortfolioList";
import { getPortfolioData } from "./PortfolioData";
import { url } from "inspector";

function App() {
  const portfolioData = getPortfolioData();
  console.log(portfolioData)

  return (
    <>
      <header id="header" >
				<nav >
					<ul >
						<li><a href="#intro">Home</a></li>
						<li><a href="#one">About Me</a></li>
						<li><a href="#work">My Work</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</nav>
			</header>

		
			<section id="intro" className="main style1 dark fullscreen">
				<div className="content">
					<header style={{marginBottom:"50%"}}>
						<h2 style={{marginTop:"30%"}}>Hamid Ebrahimi</h2>
            		<strong>Software Developer</strong>
					</header>
					<footer>
						
					</footer>
				</div>
			</section>

		
			<section id="one" className="main style2 right dark fullscreen">
				<div className="content box style2">
					<header>
						<h2>About Me</h2>
					</header>
					<p>
						A versatile software developer that understands programming fundamentals.
						Currently pursuing a Bachelors in Electrical Engineering at Rutgers University. 
						Recent graduate of General Assembly’s software immersion course. 
						This course provided me great experience and helped diversify my already wide array of programming skills. 
						I am very eager to work with anyone looking to create a website or set up a web infrastructure.<br />
          		  </p>
				</div>
			</section>

		
			<section id="work" className="main style2 fullscreen">
				<div className="content">
					<header>
						<h2>Skills</h2>
					</header>
            <div style={{}}>
                <i className="fab fa-react fa-lg" style={{display:"inline-block"}}><label style={{fontSize:"small"}}>React</label></i>
                <i className="fab fa-html5 fa-lg" style={{display:"inline-block"}}> <label style={{fontSize:"small"}}>HTML</label></i>
                <i className="fab fa-js-square fa-2x" style={{display:"inline-block"}}><label></label></i>
                <i className="fab fa-node fa-2x" style={{display:"inline-block"}}></i>
                <i className="fab fa-bootstrap fa-lg" style={{display:"inline-block"}}><label style={{fontSize:"x-small"}}>BootStrap</label></i>
                <i className="fas fa-database fa-lg" style={{display:"inline-block"}}><label style={{fontSize:"xx-small"}}>Mongo</label></i>
                <i className="fas fa-server fa-lg" style={{display:"inline-block"}}><label style={{fontSize:"x-small"}}>Azure</label></i>
                <i className="fas fa-server fa-lg" style={{display:"inline-block"}}><label style={{fontSize:"x-small"}}>AWS</label></i>
                <i className="fab fa-windows fa-lg" style={{display:"inline-block"}}><label style={{fontSize:"x-small"}}>Windows</label></i>
                <i className="fab fa-linux fa-lg" style={{display:"inline-block"}}><label style={{fontSize:"x-small"}}>Linux</label></i>
                <i className="fab fa-apple fa-lg" style={{display:"inline-block"}}><label style={{fontSize:"x-small"}}>Mac</label></i>
            </div>
          </div>
          </section>
          <section id="gallery" className="main style3 primary">
          <div className="content">
					<header>
						<h2>Projects</h2>
					</header>
						<div className="gallery">
							{
							portfolioData.map((project,index)=>{
								let indx=(index+1)%2
								if(indx===0)
								{return(
									<article className="from-right">
									<a href={project.projectUrl} className="image fit "style={{height:"100%", width:"100%",backgroundImage:`url(${project.iconPhotoURL.toString()})` }}> 
									<h2 style={{padding: "25% 0"}}>{project.projectName}</ h2>
									</a>
									</article>)
								}
								else{
									return(
									<article className="from-left">
										<a href={project.projectUrl} className="image fit" title="" style={{height:"100%",width:"100%", padding: "25% 0", backgroundImage:`url(${project.iconPhotoURL.toString()})`}}><h2>{project.projectName}</ h2></a>
									</article>
									)
								}})
							}
						
							{/* <article className="from-left">
								<a href="images/fulls/01.jpg" className="image fit" title="WTF" style={{height:"100%", padding: "25% 0"}}><p>HoopN</p></a>
							</article>
							<article className="from-right">
								<a href="images/fulls/02.jpg" className="image fit"><img src="images/thumbs/02.jpg" title="Airchitecture II" alt="" /></a>
							</article>
							<article className="from-left">
								<a href="images/fulls/03.jpg" className="image fit"><img src="images/thumbs/03.jpg" title="Air Lounge" alt="" /></a>
							</article>
							<article className="from-right">
								<a href="images/fulls/04.jpg" className="image fit"><img src="images/thumbs/04.jpg" title="Carry on" alt="" /></a>
							</article>
							<article className="from-left">
								<a href="images/fulls/05.jpg" className="image fit"><img src="images/thumbs/05.jpg" title="The sparkling shell" alt="" /></a>
							</article>
							<article className="from-right">
								<a href="images/fulls/06.jpg" className="image fit"><img src="images/thumbs/06.jpg" title="Bent IX" alt="" /></a>
							</article> */}
						</div>
            </div>

				
			</section>

		
			<section id="contact" className="main style3 secondary">
				<div className="content">
					<header>
						<h2>Say Hello.</h2>
						<p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.</p>
					</header>
					<div className="box">
						<form method="post" action="#">
							<div className="fields">
								<div className="field half"><input type="text" name="name" placeholder="Name" /></div>
								<div className="field half"><input type="email" name="email" placeholder="Email" /></div>
								<div className="field"><textarea name="message" placeholder="Message"  rows={6}></textarea></div>
							</div>
							<ul className="actions special">
								<li><input type="submit" value="Send Message" /></li>
							</ul>
						</form>
					</div>
				</div>
			</section>

		
			<footer id="footer">

			
					<ul className="icons">
						<li><a href="#" className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
						<li><a href="#" className="icon brands fa-github"><span className="label">Dribbble</span></a></li>
					</ul>

				

			</footer>
    </>
  );
}

export default App;
