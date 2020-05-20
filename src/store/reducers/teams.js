import InitialState from "../initialState";
import { createReducer } from "@reduxjs/toolkit";
import { getAllTeamsSuccess } from "../actions/teams";

const teams = createReducer(InitialState.teams, {
	[getAllTeamsSuccess]: (state, action) => {
		state.name = action.payload.data.name;
		state.clubs= action.payload.data.clubs;
	},
});
export default teams;
