import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Characters = (props) => {
	const { store, actions } = useContext(Context);

	console.log(store)

	useEffect(() =>{
		fetch("https://www.swapi.tech/api/people")
		.then((result) => result.json())
		.then((data) => actions.setPeopleData(data.results));
	}, []);
	
	return (
		<div className="container">
			<div className="row">
				<h3 className="text-danger">Characters</h3>
			</div>
			<div className="list-group list-group-horizontal inline-scroll">
				{store.people.map((person) => {
					return (
						<div key={person.uid}>
							<div className="card" style={{width: "18rem",  marginRight: "15px"}}>
								<img src="https://barrie360.com/wp-content/uploads/2019/08/Star-Wars-400x200.png" className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">{person.name}</h5>
									<p className="card-text">Gender: {person.gender}</p>
									<p className="card-text">Hair color: {person.hair_color}</p>
									<p className="card-text">Eye color: {person.eye_color}</p>
									<div className="d-flex justify-content-between">
										<Link to={"/single/" + person.uid}>
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
