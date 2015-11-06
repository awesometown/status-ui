import axios from "axios";

export default class StatusClient {
	constructor(baseUrl) {
		this.baseUrl = baseUrl;
	}

	getServices() {
		return axios.get(this.baseUrl + "/api/services");
	}

	getIncidents() {
		return axios.get(this.baseUrl + "/api/incidents");
	}

	getIncident(incidentId) {
		return axios.get(this.baseUrl + "/api/incidents/" + incidentId);
	}
}
