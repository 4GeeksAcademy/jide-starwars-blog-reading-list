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
		.then((data) => actions.setPersonData(data.results));
	}, []);

	

	return (
		<div className="container">
			<div className="row">
				<div className="w-65 d-flex flex-column justify-content-between">
					<h1 className="display-4">{property.name}</h1>
					<p className="lead mt-3 fs-3">
						Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Asperiores itaque nesciunt suscipit alias
						architecto voluptates fuga cupiditate, accusamus
						exercitationem, expedita non perferendis error autem
						neque reiciendis, minus iusto? Minima, natus.
					</p>
				</div>
				<hr></hr>
				<ul className="list-group d-flex justify-content-between mt-5">
					<div className="d-flex flex-row justify-content-between">
						<li className="list-group-item d-flex flex-column justify-content-between">
							<div className="bold">Birth Year</div>
							<div>{birth_year}</div>
						</li>
						<li className="list-group-item d-flex flex-column justify-content-between">
							<div className="bold">Height</div>
							<div>{height} cm.</div>
						</li>
						<li className="list-group-item d-flex flex-column justify-content-between">
							<div className="bold">Mass</div>
							<div>{mass} kg.</div>
						</li>
					</div>
				</ul>

			</div>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
