import React from "react";
import { Card, Col, Container,Row } from "react-bootstrap";
import sai from "../images/sai.jpg";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Resume = () => {
	return (
		<Container className="my-5">
			<Card
				style={{
					backgroundColor: "white",
					marginTop: "3rem",
					marginBottom: "3rem",
				}}
			>
				<Card.Header style={{ backgroundColor: "Black" }}>
					<h1 style={{ color: "whitesmoke" }}>Namsani Saikiran Yadav</h1>
				</Card.Header>
				<Card.Body style={{}}>
					<Row
						style={{
							backgroundColor: "white",
							borderBottom: "5px Solid white",
						}}
					>
						<Col md={4} sm={6}>
							<img
								style={{ width: "14rem" }}
								className="rounded-circle"
								src={sai}
								alt="sai"
							/>
							<Card.Body>
								<Card.Title>Personal details</Card.Title>
								<Card.Text>
									<ul>
										<li>Phone: 9700728550</li>
										<li>Email id: sai24608@gmail.com</li>
										<li>Location:Hyderabad</li>
									</ul>
								</Card.Text>
							</Card.Body>
						</Col>
						<Col md={8} sm={6} className="my-auto">
							<Card.Title>Career objective</Card.Title>
							<Card.Text>
								Experienced Web Developer with a demonstrated history of working
								in the e-learning industry. Skilled in Python, Java, Web
								Development,and Leadership. Strong engineering professional with
								a Master of Computer Applications - MCA focused in Computer
								Science from Chaitanya Bharathi Institute Of Technology.
							</Card.Text>
						</Col>
					</Row>
					<Row
						style={{
							borderBottom: "5px Solid white",
							marginTop: "5px",
							backgroundColor: "#white",
							marginBottom: "2rem",
						}}
					>
						<Col md={6} sm={6}>
							<Card.Title>Education</Card.Title>
							<Card.Text>
								<ul>
									<li>
										Pursuing (PG) Master of Computer application in Chaitanya
										Bharathi institute of technology.
									</li>
									<li>Completed(UG) Aurora degree college</li>
									<li>
										Intermediate Narayana junior Collage completed in 2016
									</li>
									<li>10th Bhashyam Public school completed in 2014.</li>
								</ul>
								<Card.Title>Tech Links</Card.Title>
								<ul>
									<li>
										<a href="https://www.hackerrank.com/sai24608">Hackerrank</a>
									</li>
									<li>
										<a href="https://leetcode.com/sai519306/">Leetcode</a>
									</li>
									<li>
										<a href="https://github.com/saikiran101">Github</a>
									</li>
								</ul>
							</Card.Text>
						</Col>
						<Col md={6} sm={6}>
							<Card.Title>Tech Skills</Card.Title>
							<Card.Text>
								<ul>
									<li>C</li>
									<li>Core Java</li>
									<li>Python</li>
								</ul>
								<Card.Title>Web Development</Card.Title>
								<Card.Text>
									<Row>
										<Col>
											<Card.Title>Front-end:</Card.Title>
											<ul>
												<li>HTML5</li>
												<li>CSS3</li>
												<li>Javascript</li>
												<li>React.js</li>
												<li>Redux</li>
												<li>React-Bootstrap</li>
												<li>material-ui</li>
											</ul>
										</Col>
										<Col>
											<Card.Title>Back-End:</Card.Title>
											<ul>
												<li>Node.js</li>
												<li>express</li>
												<li>mongoDb</li>
												<li>Firebase</li>
											</ul>
										</Col>
									</Row>
								</Card.Text>
							</Card.Text>
						</Col>
					</Row>
					<Row style={{ backgroundColor: "white" }}>
						<Col md={6} sm={6}>
							<Card.Title>Courses Certification</Card.Title>
							<Card.Text>
								<ul>
									<li>Web development Bootcamp 2020 in Udemy.</li>
									<li>
										Responsive Website Basics: Code with HTML, CSS, and
										JavaScript in Coursera.
									</li>
									<li>Python & Python with Data Structure in Coursera.</li>
									<li>Core java.</li>
									<li>C programming.</li>
								</ul>
							</Card.Text>
						</Col>
						<Col md={6} sm={6}>
							<Card.Title>Work Experience Certification</Card.Title>
							<Card.Text>
								<ul>
									<li>
										I have 3 months experience as a Web developer in a
										Qriocty-box company.
									</li>
									<li>
										Software Engineering Virtual Experience in JP Morgon Chase
										&Co.
									</li>
									<li>Accenture Discovery Program Virtual Internship.</li>
								</ul>
							</Card.Text>
						</Col>
					</Row>
				</Card.Body>
			</Card>
			<div className="d-flex justify-content-center mt-3">
				<h3 style={{ color: "white" }}>To view my projects click here</h3>
			</div>
			<div className="d-flex justify-content-center mt-3">
				<NavLink className="btn btn-primary" to="/Projects">
					Projects
				</NavLink>
			</div>
		</Container>
	);
};

export default Resume;
