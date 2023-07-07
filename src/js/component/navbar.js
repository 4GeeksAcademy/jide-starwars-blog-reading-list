import React from "react";
import { Link } from "react-router-dom";
import swImage from "../../img/star-wars.jpeg";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img src={swImage} alt="Bootstrap" width="130" height="40"></img>
					</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Favorites</button>
					</Link>
			</div>
			</div>
		</nav>
	);
};
