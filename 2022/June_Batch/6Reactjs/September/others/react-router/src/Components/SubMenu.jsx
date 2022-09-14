import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import { useParams, useRouteMatch, Redirect } from "react-router-dom";

import ALink from "./ALink";

const MODELS_BY_BRAND = {
	Mercedes: ["A-Class", "C-Class", "E-Class", "S-Class"],
	Ferrari: ["Tributo", "812", "GTC4", "Spider"],
	Porsche: ["Cayman", "911", "Panamera", "Taycan"],
	Lamborghini: ["Reventon", "Veneno", "Centenario", "Gallardo"],
};

const SubMenu = () => {
	const { brand } = useParams();
	const { url } = useRouteMatch();
	const models = MODELS_BY_BRAND[brand];

	if (!models) {
		return <Redirect to="/error" />;
	}

	return (
		<ul>
			{MODELS_BY_BRAND[brand].map((model) => (
				<li key={model}>
					<ALink label={model} to={`${url}/${model}`}  />
				</li>
			))}
		</ul>
	);
};

export default SubMenu;
