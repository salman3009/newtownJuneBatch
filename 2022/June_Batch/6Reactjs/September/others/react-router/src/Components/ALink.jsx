import React from "react";
import { useRouteMatch, Link,NavLink } from "react-router-dom";


const ALink = ({ label, to }) => {
	const match = useRouteMatch({ path: to, extact: true });
	return (
		// <Link to={to}>
		// 	{label}
		// </Link>
		<NavLink to={to} activeStyle={{color:'red'}}>
             {label}
		</NavLink>
	);
};

export default ALink;
