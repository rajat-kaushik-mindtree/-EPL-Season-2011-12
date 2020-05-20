import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

const useStyles = makeStyles({
	table: {
        minWidth: 650,
        height: 400
	},
});

export default function MatchTable({ matchTableData }) {
	console.log(matchTableData);

	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell align="center">Teams</TableCell>
						<TableCell align="center">Total Matches</TableCell>
						<TableCell align="center">Won</TableCell>
						<TableCell align="center">Lost</TableCell>
						<TableCell align="center">Ties</TableCell>
						<TableCell align="center">Total Goals Scored For </TableCell>
						<TableCell align="center">Total Goals Scored Against</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{matchTableData.map((row) => (
						<TableRow key={row.clubKey}>
							<TableCell align="center">{row.clubKey}</TableCell>
							<TableCell align="center">{row.totalMatches}</TableCell>
							<TableCell align="center">{row.won}</TableCell>
							<TableCell align="center">{row.lost}</TableCell>
							<TableCell align="center">{row.ties}</TableCell>

							<TableCell align="center">{row.totalGoalsScoredFor}</TableCell>
							<TableCell align="center">{row.totalGoalsScoredAgainst}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
