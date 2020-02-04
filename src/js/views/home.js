import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

import { Navbar } from "../component/navbar";
import { Card } from "../component/card";
import { Footer } from "../component/footer";
import { Jumbotron } from "../component/jumbo";

export function Home() {
	return (
		<>
			<Jumbotron />
			<Card />
			<div className="text-center mt-5" />
		</>
	);
}
