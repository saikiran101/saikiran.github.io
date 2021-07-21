import React from "react";
import { Container, Navbar} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css"

const Navbar1 = () => {
	return (
		<Navbar expand="lg">
			<Container>
				<NavLink to="/" className=" menu_active mx-auto">
					<Navbar.Brand>Portfolio</Navbar.Brand>
				</NavLink>
			</Container>
		</Navbar>
	);
};

export default Navbar1;
