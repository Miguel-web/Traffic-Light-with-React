import React from "react";
import { TraficLight } from "./traficlight.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<TraficLight />
		</div>
	);
};

export default Home;