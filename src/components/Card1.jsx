import React from "react";
//import { NavLink } from "react-router-dom";
import { Card, Col, Image, NavLink } from "react-bootstrap";

import '../App.css'

const Card1 = (props) => {
	return (
		<>
			<Col md={4} mx-auto>
				<Card>
					<Image
						src={props.imgsrc}
						className="card-img-top"
						alt={props.imgsrc}
						style={{ maxWidth: "400px", maxHeight: "300px" }}
					/>
					<Card.Body>
						<h5 className="card-title font-weight-bold">{props.title}</h5>
						<p className="card-text">{props.description}</p>
						<NavLink href={props.to} class="btn btn-primary">
							Website
						</NavLink>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
};
export default Card1;
