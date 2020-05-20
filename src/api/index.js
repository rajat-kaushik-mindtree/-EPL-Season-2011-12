import axios from "axios";
import { call } from "redux-saga/effects";

export const teamsUrl = process.env.REACT_APP_TEAMS_ENDPOINT;
export const matchesUrl = process.env.REACT_APP_MATCHES_ENDPOINT;

const apiTimeout = 5000;

// Configure axios defaults:
const axiosDefaults = {
	headers: { "Content-Type": "application/json" },
};
export const axiosConfig = axios.create({
	...axiosDefaults,
	timeout: apiTimeout,
});

// Methods:
export const GET = axiosConfig.get;
export const POST = axiosConfig.post;
const DELETE = axiosConfig.delete;
const PUT = axiosConfig.put;

export const teams = {
	getAllTeams: () => call(GET, `${teamsUrl}`),
};

export const matches = {
	getAllMatches: () => call(GET, `${matchesUrl}`),
};
