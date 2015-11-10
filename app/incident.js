import React from "react";
import {Grid, Col, Row, Table} from "react-bootstrap";
import {Link} from "react-router";
import { StatusClient } from "./globals";
import moment from "moment";

export default React.createClass({
	getInitialState: function () {
		return {loaded: false}
	},

	componentDidMount: function () {
		let location = window.location.href;
		let instanceId = location.substring(location.lastIndexOf('/') + 1);
		let incidentPromise = StatusClient.getIncident(instanceId)
			.then(result => {
				if (this.isMounted()) {
					this.setState({incident: result.data});
				}
			}).catch(result => {
				console.log(result);
			});

		let servicesPromise = StatusClient.getServices()
			.then(result => {
				let servicesMap = {};
				for (let service of result.data.data) {
					servicesMap[service.id] = service.name;
				}
				this.setState({servicesMap: servicesMap});
			}).catch(result => console.log(result));
		Promise.all([incidentPromise, servicesPromise])
			.then(values => this.setState({loaded: true}));
	},

	render: function () {
		var incident = this.state.incident;
		let content = <div id="incident-details"/>
		if (this.state.loaded) {
			content = (
				<div id="incident-details">

					<Grid>
						<Row>
							<Col md={12}>
								<Link to="/">Back</Link>
							</Col>
						</Row>
						<Row>
							<Col md={8}>
								<h1>{incident.title}</h1>
							</Col>
							<Col md={4}>
								<p>Affected Services:</p>
								<ServicesList servicesMap={this.state.servicesMap} serviceIds={incident.affectedServiceIds}/>
							</Col>
						</Row>
						<Row>
							<LatestDescription md={12} incident={incident}/>
						</Row>
						<Row>
							<Col md={12}>
								<h3>Updates:</h3>
								<UpdateList updates={incident.incidentUpdates}/>
							</Col>
						</Row>
					</Grid>
				</div>
			);
		}
		return content;
	}
});

var ServicesList = React.createClass({
	render: function () {
		let servicesMap = this.props.servicesMap;
		var serviceNodes = this.props.serviceIds.map(serviceId => <Service key={serviceId} serviceName={servicesMap[serviceId]} serviceId={serviceId}/>);
		return (
			<ul>
				{serviceNodes}
			</ul>
		);
	}
});

var Service = React.createClass({
	render: function () {
		return (
			<li key={this.props.serviceId}>{this.props.serviceName}</li>
		);
	}
});

var LatestDescription = React.createClass({
	render: function () {
		var latestUpdate = this.props.incident.incidentUpdates.length > 0 ? this.props.incident.incidentUpdates[0].description : "";

		return (
			<Col md={this.props.md}>
				<p>{this.props.incident.state} - {latestUpdate}</p>

				<p>Opened {moment(this.props.incident.createdAt).fromNow()}; last
					updated {moment(this.props.incident.updatedAt).fromNow()}</p>
			</Col>);
	}
});

var UpdateList = React.createClass({
	render: function () {
		var updates = this.props.updates.map(update => <IncidentUpdate key={update.id} update={update}/>);
		return (
			<ul>
				{updates}
			</ul>
		)
	}
});

var IncidentUpdate = React.createClass({
	render: function () {
		return (
			<li>{this.props.update.description}</li>
		);
	}
});