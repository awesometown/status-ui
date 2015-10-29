import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, Link } from "react-router";
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Dashboard from "./dashboard";
import IncidentDetails from "./incident";

require("./theme.css");

const App = React.createClass({
	render() {
		return (
			<div id="app">
				{this.props.children}
			</div>
		);
	}
})

ReactDOM.render((
		<Router history={createBrowserHistory()}>
			<Route path="/" component={App}>
				<IndexRoute component={Dashboard}/>
				<Route path="incidents/:incidentId" component={IncidentDetails}/>
			</Route>
		</Router>
	), document.getElementById('app-container')
);
