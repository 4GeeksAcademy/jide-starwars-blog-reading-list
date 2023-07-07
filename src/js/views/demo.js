import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<h3 className="text-danger">Characters</h3>
			</div>
			<ul className="list-group list-group-horizontal inline-scroll">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}>
							<div className="card" style={{width: "18rem"}}>
								<img src="..." className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">Gender: {item.gender}</p>
									<p className="card-text">Hair color: {item.hair_color}</p>
									<p className="card-text">Eye color: {item.eye_color}</p>
									<Link to={"/single/" + index}>
										<span className="btn btn-outline-primary">Learn more!</span>
									</Link>
									{/* <i className="fa fa-heart" /> */}
								</div>
							</div>	
						</li>
					);
				})}
			</ul>
			<br />
			{/* <Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link> */}
		</div>
	);
};
