import * as MatchActions from "../actions/matches";
import { takeEvery, put } from "redux-saga/effects";
import { matches as matchesAPI } from "../../api";

export function* getAllTeamsAsync() {
	try {
		const response = yield matchesAPI.getAllMatches();
		const { data } = response;
	

		if (response.status) {
			yield put({
				type: MatchActions.getAllMatchesSuccess.type,
				payload: { data },
			});
		}
	} catch (err) {
		yield alert("Sorry Something happend");
	}
}

export const watchers = [
	function* watchGetAllMatches() {
		yield takeEvery(MatchActions.getAllMatches, getAllTeamsAsync);
	},
];
