import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
	const { store, actions } = useContext(Context);
	const { charId } = useParams();

	const property = store.person.find(person => person.uid === charId);

	console.log(store)

	useEffect(() =>{
		fetch(`https://www.swapi.tech/api/people/${charId}`)
		.then((result) => result.json())
		.then((data) => actions.setPersonData(charId, data.result.properties));
	}, []);

	return (
		<div className="container">
			<div className="">
					{store.people.map((person) => {
						if (person.uid === charId && person.properties) {
							return (
								<div key={person.uid}>
									<div className="w-65 d-flex flex-column justify-content-between">
										<h4 className="">{person.name}</h4>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing
											elit. Asperiores itaque nesciunt suscipit alias
											architecto voluptates fuga cupiditate, accusamus
											exercitationem, expedita non perferendis error autem
											neque reiciendis, minus iusto? Minima, natus.
										</p>
									</div>
									<hr className="text-danger"></hr>
									<div className="row d-flex">
	
										<div className="col-2 text-danger">
											<p>Name</p>
											<p>{person.name}</p>
										</div>
	
										<div className="col-2 text-danger">
											<p>Birth Year</p>
											<p>{person.properties.birth_year}</p>
										</div>
	
										<div className="col-2 text-danger">
											<p>Gender</p>
											<p>{person.properties.gender}</p>
										</div>
											
										<div className="col-2 text-danger">		
											<p>Height</p>
											<p>{person.properties.height}</p>
										</div>
										
										<div className="col-2 text-danger">		
											<p>Skin color</p>
											<p>{person.properties.skin_color}</p>
										</div>
	
										<div className="col-2 text-danger">		
											<p>Eye color</p>
											<p>{person.properties.eye_color}</p>
										</div>
									</div>
								</div>
							);
						}
					})}
				</div>
				<Link to="/">
					<button className="btn btn-primary" href="#" role="button">
						Back home
					</button>
				</Link>
			</div>
		
	);
};

Single.propTypes = {
	match: PropTypes.object
};
