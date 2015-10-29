import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link } from "react-router"
import Dashboard from "./dashboard";

require("./theme.css");

const App = React.createClass({
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
})

ReactDOM.render((
		<Router>
			<Route path="/" component={App}>
				<IndexRoute component={Dashboard}/>
			</Route>
		</Router>
	), document.getElementById('app')
);
