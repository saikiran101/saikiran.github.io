import React from 'react'
import "../App.css"
import { Container,Row,Col,Image } from 'react-bootstrap'
import sai from "../images/sai.jpg"
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

const Home = () => {
	return (
		<section
			id="header"
			className="d-flex align-items-center"
			style={{ marginTop: "29px" }}
		>
			<Container fuild>
				<Row>
					<Col lg={12}>
						<Row>
							<Col
								md={6}
								className="pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"
								style={{ color: "white" }}
							>
								<h1>
									<strong className="brand-name">Namsani Saikiran Yadav</strong>
								</h1>
								<h4>Web developer</h4>
								<h5>I am passionate web developer and aiming to be a Full stack web developer. Looking for a place where i can learn and contribute to real world solution</h5>
								<div className="mt-3">
									<NavLink className="btn btn-outline-primary" to="/Resume">
										Next
									</NavLink>
								</div>
							</Col>
							<Col md={6} className="order-1 order-lg-2 header-img">
								<Image
									roundedCircle
									src={sai}
									style={{ width: "70%" }}
									className="img-fluid animated mx-auto d-block"
								/>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default Home
