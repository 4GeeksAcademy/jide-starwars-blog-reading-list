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
					{store.people.map((property) => {
						if (property.uid === charId) {
							return (
								<div key={property.uid}>
									<div className="w-65 d-flex flex-column justify-content-between">
										<h4 className="">{property.name}</h4>
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
											<p>{property.name}</p>
										</div>
	
										<div className="col-2 text-danger">
											<p>Birth Year</p>
											<p>{property.birth_year}</p>
										</div>
	
										<div className="col-2 text-danger">
											<p>Gender</p>
											<p>{property.gender}</p>
										</div>
											
										<div className="col-2 text-danger">		
											<p>Height</p>
											<p>{property.height}</p>
										</div>
										
										<div className="col-2 text-danger">		
											<p>Skin color</p>
											<p>{property.skin_color}</p>
										</div>
	
										<div className="col-2 text-danger">		
											<p>Eye color</p>
											<p>{property.eye_color}</p>
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
