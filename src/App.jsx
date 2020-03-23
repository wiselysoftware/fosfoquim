import React from 'react';
import { HashRouter , Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./style.scss";

import Layout from "./views/Layout/index.jsx";
import GuestLayout from "./views/GuestLayout/index.jsx";

function App() {
	const customHistory = createBrowserHistory();
	console.log(window.location);
	return (
		<HashRouter history={customHistory}>
			<Switch>
				<Route path="/temporary-access" component={GuestLayout}/>
				<Route component={Layout}/>
			</Switch>
		</HashRouter>
	);
}

export default App;
