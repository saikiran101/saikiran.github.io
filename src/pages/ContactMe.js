import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const SignUp = (props) => {
	const [user, setUser] = useState({
		name: "",
		phone: "",
		email: "",
		company: "",
	});

	let name, value;
	const handleInputs = (e) => {
		console.log(e);
		name = e.target.name;
		value = e.target.value;

		setUser({ ...user, [name]: value });
	};

	const PostData = (e) => {
		e.preventDefault();
		console.log(user)
	};
	
	return (
		<Container className="mt-5">
			<Row className="justify-content-md-center">
				<Col md={6} sm={6}>
					<Container>
						<Form method="POST">
							<h4 className="grey-text text-darken-3 pb-2">Contact Me</h4>
							<div style={{ height: "320px" }}>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>First Name</Form.Label>
									<Form.Control
										type="text"
										id="name"
										name="name"
										value={user.name}
										onChange={handleInputs}
										placeholder="First Name"
									/>
								</Form.Group>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>Last Name</Form.Label>
									<Form.Control
										type="text"
										id="phone"
										name="phone"
										value={user.phone}
										style={{
											transition:
												"box-shadow .3s, border .3s, -webkit-box-shadow .3s",
										}}
										onChange={handleInputs}
										placeholder="Last Name"
									/>
								</Form.Group>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control
										type="email"
										id="email"
										name="email"
										value={user.email}
										onChange={handleInputs}
										placeholder="Enter email"
									/>
								</Form.Group>
								<Form.Group controlId="formBasiccompany">
									<Form.Label>company</Form.Label>
									<Form.Control
										type="company"
										id="company"
										name="company"
										value={user.company}
										onChange={handleInputs}
										placeholder="company"
									/>
								</Form.Group>
							</div>
							<Button
								variant="danger"
								type="submit"
								name="signup"
								value="register"
								onClick={PostData}
							>
								Login
							</Button>
						</Form>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default SignUp;
