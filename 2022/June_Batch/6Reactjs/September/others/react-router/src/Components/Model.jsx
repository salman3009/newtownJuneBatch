import React from "react";
import { useParams } from "react-router-dom";

const Model = () => {
	const { model } = useParams();
	return (
		<div>
			<h3>{model}</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex velit unde
				nemo cum veniam esse non accusamus a aliquid. Maiores possimus nam
				doloribus labore in sequi! Officia quasi eveniet corrupti!
			</p>
		</div>
	);
};

export default Model;
