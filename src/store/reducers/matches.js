import InitialState from "../initialState";
import { createReducer } from "@reduxjs/toolkit";
import { getAllMatchesSuccess } from "../actions/matches";

const matches = createReducer(InitialState.matches, {
	[getAllMatchesSuccess]: (state, action) => {
		state.name = action.payload.data.name;
		state.rounds= action.payload.data.rounds;
	},
});
export default matches;
