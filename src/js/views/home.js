import React from "react";
import { Characters } from "./character";
import { Planets } from "./planet";
import "../../styles/home.css";

export const Home = () => (
	<div className="container">
		<Characters />
		<Planets />
		
	</div>
);
