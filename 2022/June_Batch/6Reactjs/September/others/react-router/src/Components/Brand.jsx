import React, { Fragment } from "react";
import { useParams, useRouteMatch, Switch, Route } from "react-router-dom";

import Model from "./Model";
import SubMenu from "./SubMenu";



const Brand = () => {
	const { brand } = useParams();
	console.log("brand",brand);
	const { url } = useRouteMatch();
	console.log("url",url);
	return (
		<Fragment>
			<h1>{brand}</h1>
			<div>
				<SubMenu />
				<div>
					<Switch>
						<Route path={`${url}/:model`}>
							<Model />
						</Route>
					</Switch>
				</div>
			</div>
		</Fragment>
	);
};

export default Brand;
