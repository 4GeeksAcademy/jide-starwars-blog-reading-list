import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Planets = (props) => {
	const { store, actions } = useContext(Context);

	console.log(store)

	useEffect(() =>{
		fetch("https://www.swapi.tech/api/planets")
		.then((result) => result.json())
		.then((data) => actions.setPlanetsData(data.results));
	}, []);
	
	return (
		<div className="container">
			<div className="row">
				<h3 className="text-danger">Planets</h3>
			</div>
			<div className="list-group list-group-horizontal inline-scroll">
				{store.planets.map((planet) => {
					return (
						<div key={planet.uid}>
							<div className="card" style={{width: "18rem"}}>
								<img src="https://barrie360.com/wp-content/uploads/2019/08/Star-Wars-400x200.png" className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">{planet.name}</h5>
									<p className="card-text">Gender: {planet.gender}</p>
									<p className="card-text">Hair color: {planet.hair_color}</p>
									<p className="card-text">Eye color: {planet.eye_color}</p>
									<div className="d-flex justify-content-between">
										<Link to={"/single/" + planet.uid}>
											<span className="btn btn-outline-primary">Learn more!</span>
										</Link>
										&nbsp;
										<i className="fa fa-heart text-warning" />
									</div>
								</div>
							</div>	
						</div>
					);
				})}
			</div>
			<br />
		</div>
		
	);
};
