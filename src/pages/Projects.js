import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Card from "../components/Card1";
import Sdata from "../components/Sdata";

const Service = () => {
	return (
		<>
			<div>
				<h1 className="text-center" style={{ color: "white" }}>
					Projects
				</h1>
			</div>
			<div className="container-fluid my-5">
				<div className="row">
					<div className="col-10 mx-auto">
						<div className="row gy-4">
							{Sdata.map((val, ind) => {
								return (
									<Card
										style={{
											boxShadow:
												"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
											height: "400px",
										}}
										key={ind}
										imgsrc={val.imgsrc}
										title={val.title}
										description={val.description}
										to={val.to}
									/>
								);
							})}
						</div>

						<div className="d-flex justify-content-center mt-3">
							<h3 style={{ color: "white" }}>
								If you want to get in touch with Me
							</h3>
						</div>
						<div className="d-flex justify-content-center mt-3">
							<NavLink className="btn btn-primary" to="/ContactMe">
								Contact Me
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Service;
