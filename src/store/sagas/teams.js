import * as TeamsActions from "../actions/teams";
import { takeEvery, put } from "redux-saga/effects";
import { teams as teamsAPI } from "../../api";

export function* getAllTeamsAsync() {
	try {
		const response = yield teamsAPI.getAllTeams();
		const { data } = response;
		if (response.status) {
			yield put({
				type: TeamsActions.getAllTeamsSuccess.type,
				payload: { data },
			});
		}
	} catch (err) {
		yield alert("Sorry Something happend");
	}
}

export const watchers = [
	function* watchGetAllTeams() {
		yield takeEvery(TeamsActions.getAllTeams, getAllTeamsAsync);
	},
];
