import React, { useState, useEffect } from "react";
import logo from "./logo.svg";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getAllMatches } from "./store/actions/matches";
import { getAllTeams } from "./store/actions/teams";
import "./App.css";
import MatchTable from "./components/MatchTable";
import { createMatchTableData, createBubbleChartData } from "./utils";
import { BubbleChart } from "./components/BubbleChart";

function App() {
	const dispatch = useDispatch();
	const teamsState = useSelector((state) => state.teams, shallowEqual);
	const matchesState = useSelector((state) => state.matches, shallowEqual);
	const [matchTableData, setMatchTableData] = useState([]);
	const [bubbleChartData, setBubbleChartData] = useState();

	useEffect(() => {
		dispatch(getAllMatches());
		dispatch(getAllTeams());
	}, [dispatch]);

	useEffect(() => {
		teamsState.clubs.length > 0 && matchesState.rounds.length > 0 && parseData();
	}, [teamsState, matchesState]);

	const parseData = () => {
		const parsedMatchTableData = createMatchTableData(teamsState, matchesState);
		setMatchTableData(parsedMatchTableData);
		const parsedBubbleChartData = createBubbleChartData(parsedMatchTableData);
		setBubbleChartData(parsedBubbleChartData);
	};
	return (
		<div className="App">
			<BubbleChart bubbleChartData={bubbleChartData}></BubbleChart>
			<MatchTable matchTableData={matchTableData}></MatchTable>
		</div>
	);
}

export default App;
