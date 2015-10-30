import React from "react";
import {Grid, Col, Row, Table} from "react-bootstrap";
import {Link} from "react-router";

export default React.createClass({
	getInitialState: function () {
		return {incident: INCIDENT};
	},

	componentDidMount: function () {
		this.setState({
			incident: INCIDENT
		})
	},

	render: function () {
		var incident = this.state.incident;
		return (
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
							<ServicesList serviceIds={incident.affectedServiceIds}/>
						</Col>
					</Row>
					<Row>
						<Col md={12}>
							<p>{incident.state} - {incident.incidentUpdates[0].description}</p>

							<p>Opened {incident.createdAt}; last updated {incident.updatedAt}</p>
						</Col>
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
});

var ServicesList = React.createClass({
	render: function () {
		var serviceNodes = this.props.serviceIds.map(serviceId => <Service serviceId={serviceId}/>);
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
			<li key={this.props.serviceId}>{this.props.serviceId}</li>
		);
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

var INCIDENT = {
	"id": "ecb25105-b676-42d6-a29b-8939fc66f617",
	"title": "Herp",
	"state": "identified",
	"serviceStatusId": "degraded",
	"affectedServiceIds": [123456],
	"createdAt": "2015-10-26T16:41:12.502Z",
	"updatedAt": "2015-10-26T16:59:57.985Z",
	"incidentUpdates": [
		{
			"id": "5470a53d-d8da-4e22-9f9f-edbb173fba7e",
			"description": "asdfasdf",
			"state": "identified",
			"updatedBy": "ok",
			"createdAt": "2015-10-26T16:59:57.985Z",
			"updatedAt": "2015-10-26T16:59:57.985Z"
		},
		{
			"id": "74769cbb-7443-43a4-ae17-e015525ad540",
			"description": "zxcvzxcv",
			"state": "resolved",
			"updatedBy": "ok",
			"createdAt": "2015-10-26T16:59:45.642Z",
			"updatedAt": "2015-10-26T16:59:45.642Z"
		},
		{
			"id": "57797b49-5808-4d7e-975a-df38a19672bc",
			"description": "asdfasdf",
			"state": "monitoring",
			"updatedBy": "ok",
			"createdAt": "2015-10-26T16:59:02.180Z",
			"updatedAt": "2015-10-26T16:59:02.180Z"
		},
		{
			"id": "7e7f5731-f613-4bc2-900d-1845601f4130",
			"description": "vzxcvzxcv",
			"state": "monitoring",
			"updatedBy": "ok",
			"createdAt": "2015-10-26T16:56:22.074Z",
			"updatedAt": "2015-10-26T16:56:22.074Z"
		},
		{
			"id": "cddae271-a6f4-4199-b16a-a0ad9ca962b3",
			"description": "xcvzx",
			"state": "identified",
			"updatedBy": "ok",
			"createdAt": "2015-10-26T16:54:55.602Z",
			"updatedAt": "2015-10-26T16:54:55.602Z"
		},
		{
			"id": "5498d28c-93be-4c8f-952a-a478cb5fe48b",
			"description": "",
			"state": "investigating",
			"updatedBy": "ok",
			"createdAt": "2015-10-26T16:54:29.941Z",
			"updatedAt": "2015-10-26T16:54:29.941Z"
		},
		{
			"id": "1587f8f6-6da2-44db-97f3-5ca32330d580",
			"description": "asdfa",
			"state": "investigating",
			"updatedBy": "degraded",
			"createdAt": "2015-10-26T16:42:35.055Z",
			"updatedAt": "2015-10-26T16:42:35.055Z"
		},
		{
			"id": "5ac544e6-b4c9-4c4d-adad-2cce110344b1",
			"description": "asdfasfda",
			"state": "investigating",
			"updatedBy": "minor",
			"createdAt": "2015-10-26T16:42:23.809Z",
			"updatedAt": "2015-10-26T16:42:23.809Z"
		},
		{
			"id": "08f0991f-05e2-44c0-b45a-7dd1ef360567",
			"description": "Derp",
			"state": "investigating",
			"updatedBy": "degraded",
			"createdAt": "2015-10-26T16:41:12.502Z",
			"updatedAt": "2015-10-26T16:41:12.502Z"
		}
	]
};