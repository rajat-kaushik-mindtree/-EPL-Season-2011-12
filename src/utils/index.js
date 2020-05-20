export const createMatchTableData = (teams, matches) => {
	let data = [];
	teams.clubs.forEach((club) => {
		const { key: clubKey, name: clubName, code: clubCode } = club;
		const clubTableRowDetails = {
			clubKey,
			totalMatches: 0,
			won: 0,
			lost: 0,
			ties: 0,
			totalGoalsScoredFor: 0,
			totalGoalsScoredAgainst: 0,
		};
		matches.rounds.forEach((round) => {
			round.matches.forEach((match) => {
				if (match.team1.key === clubKey) {
					++clubTableRowDetails.totalMatches;
					clubTableRowDetails.totalGoalsScoredFor += match.score1;
					clubTableRowDetails.totalGoalsScoredAgainst += match.score2;
					if (match.score1 > match.score2) {
						++clubTableRowDetails.won;
					} else if (match.score1 === match.score2) {
						++clubTableRowDetails.ties;
					} else {
						++clubTableRowDetails.lost;
					}
				} else if (match.team2.key === clubKey) {
					++clubTableRowDetails.totalMatches;
					clubTableRowDetails.totalGoalsScoredFor += match.score2;
					clubTableRowDetails.totalGoalsScoredAgainst += match.score1;
					if (match.score2 > match.score1) {
						++clubTableRowDetails.won;
					} else if (match.score2 === match.score1) {
						++clubTableRowDetails.ties;
					} else {
						++clubTableRowDetails.lost;
					}
				}
			});
		});
		data.push(clubTableRowDetails);
	});
	return data;
};

export const createBubbleChartData = (teamsData) => {
	const datasets = teamsData.map((teamData) => {
		const color = generateRandomColor();
		return {
			label: teamData.clubKey,
			fill: false,
			lineTension: 0.1,
			backgroundColor: color,
			borderColor: color,
			borderCapStyle: "butt",
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: "miter",
			pointBorderColor: color,
			pointBackgroundColor: color,
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: color,
			pointHoverBorderColor: color,
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data: [{ x: teamData.lost, y: teamData.won, r: teamData.won }],
		};
	});
	return { datasets };
};

const generateRandomColor = () => {
	return "#" + Math.random().toString(16).substr(-6);
};
